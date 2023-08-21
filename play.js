const life_points = document.querySelector(".life-point");
const user_input = document.querySelector("#user-input");
const submitButton = document.getElementById("submit");
const statement_d = document.querySelector(".display-state span");
const statement_box = document.querySelector(".display-nyawa");
const statement_end = document.querySelector(".popup span");
const home_btn = document.querySelector(".Home-button");
home_btn.addEventListener("click", () => {
  window.location.href = "homepage.html";
});
let jumlahnyawa = localStorage.getItem("maxLives");
let default_nyawa = 7;
let = status_akhir = false;
let difficulty_game = localStorage.getItem("selectedDifficulty");
let b_awal = 0;
let b_akhir = 100;
let state_b = true;
let target_num = Math.floor(Math.random() * 100) + 1;

if (jumlahnyawa === null) {
  life_points.innerHTML = `LIFE POINTS : ${default_nyawa}`;
} else {
  life_points.innerHTML = `LIFE POINTS : ${jumlahnyawa}`;
}

submitButton.addEventListener("click", function () {
  const angka_sekarang = parseInt(user_input.value);
  if (jumlahnyawa > 0 && state_b) {
    if (angka_sekarang > target_num) {
      if (life_points.textContent.length > 0) {
        statement_box.classList.add("shake");

        // Hapus kelas "shake" setelah animasi selesai (0.5 detik)
        setTimeout(() => {
          statement_box.classList.remove("shake");
        }, 500);
        jumlahnyawa -= 1;

        life_points.textContent = `LIFE POINTS : ${jumlahnyawa}`;
      }
      statement_d.innerHTML = `THE NUMBER IS BETWEEN ${b_awal} AND  ${angka_sekarang}`;
      b_akhir = angka_sekarang;
    } else if (angka_sekarang < target_num) {
      if (life_points.textContent.length > 0) {
        statement_box.classList.add("shake");

        // Hapus kelas "shake" setelah animasi selesai (0.5 detik)
        setTimeout(() => {
          statement_box.classList.remove("shake");
        }, 500);
        jumlahnyawa -= 1;

        life_points.textContent = `LIFE POINTS : ${jumlahnyawa}`;
      }
      statement_d.innerHTML = `THE NUMBER IS BETWEEN ${angka_sekarang} AND ${b_akhir}`;
      b_awal = angka_sekarang;
    } else {
      statement_d.innerHTML = `YOU RIGHT ! THE NUMBER IS ${target_num}`;

      state_b = false;
      gameEnd();
    }
  }

  if (jumlahnyawa === 0 && state_b) {
    statement_d.innerHTML = `YOU LOSE! THE CORRECT NUMBER WAS ${target_num}`;

    state_b = false;
    gameEnd();
  }
});

function showPopup(status_akhir) {
  if (status_akhir === true) {
    statement_end.innerHTML = `YOU RIGHT ! THE NUMBER IS ${target_num}`;
  } else {
    statement_end.innerHTML = `YOU LOSE! THE CORRECT NUMBER WAS ${target_num}`;
  }
  popup.style.display = "flex";
}

// Hide the popup
function hidePopup() {
  popup.style.display = "none";
}

// When the game ends, show the popup
function gameEnd() {
  showPopup();
}

// When "Yes" is clicked, refresh the page
playAgainYes.addEventListener("click", function () {
  location.reload();
});

playAgainNo.addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "homepage.html"; // Replace with your main menu URL
});
