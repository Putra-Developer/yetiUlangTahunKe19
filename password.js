// PASSWORD
const correctPassword = "yeyetdanibal"; 

    const modal = document.getElementById("passwordModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const passwordInput = document.getElementById("passwordInput");
    const errorMessage = document.getElementById("errorMessage");
    const tombolKirim = document.getElementById("tombolPw")
    // Buka modal
    openBtn.onclick = function () {
      modal.style.display = "block";
      passwordInput.focus();
    };

    // Tutup modal
    closeBtn.onclick = function () {
      modal.style.display = "none";
      passwordInput.value = "";
      errorMessage.textContent = "";
    };

    // Tekan Enter
    passwordInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        checkPassword();
      }
    });

    // Tekan Tombol
    tombolKirim.addEventListener("click", function(event){
        checkPassword();
    })

    function checkPassword() {
      if (passwordInput.value === correctPassword) {
        window.location.href = "galeri.html"; // Ganti halaman tujuan
      } else {
        errorMessage.textContent = "Kepo yaaa Kau siapanya developer kepo sama isi ini wkwkwk kalau mau tau tanya sama developernya";
        passwordInput.value = "";
      }
    }

    // Klik di luar modal untuk menutup
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        passwordInput.value = "";
        errorMessage.textContent = "";
      }
    };