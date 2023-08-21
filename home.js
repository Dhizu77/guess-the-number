let maxLive;

document.addEventListener("DOMContentLoaded", function () {
  const nextPageButton = document.querySelector(".text-play");
  const content_body = document.querySelector(".content-body");
  const header = document.querySelector(".header-text");
  const footer = document.querySelector(".footer-wave");
  const diffield = document.querySelector(".field-radio");
  const button_play = document.querySelector(".card");
  nextPageButton.addEventListener("click", function (event) {
    event.preventDefault();
    content_body.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
    diffield.style.display = "none";
    button_play.style.display = "none";
    const loadingElement = document.querySelector(".wrapper");
    loadingElement.style.display = "flex"; // Menampilkan animasi loading

    // Simulasi loading selama beberapa detik (misal: 3 detik)
    setTimeout(function () {
      // Setelah loading selesai, pindah ke halaman berikutnya
      window.location.href = nextPageButton.getAttribute("href");
    }, 3000);
  });
  const difficultyInputs = document.querySelectorAll(
    'input[name="difficulty"]'
  );

  difficultyInputs.forEach((input) => {
    input.addEventListener("click", function () {
      const selectedDifficulty = input.value;

      switch (selectedDifficulty) {
        case "easy":
          maxLive = 10;

          break;
        case "medium":
          maxLive = 7;

          break;
        case "hard":
          maxLive = 5;

          break;
        default:
          maxLive = 7; // Default to medium difficulty
      }
      localStorage.setItem("selectedDifficulty", selectedDifficulty);
      localStorage.setItem("maxLives", maxLive);
    });
  });
});
