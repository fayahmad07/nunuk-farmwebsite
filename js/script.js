// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // Simple form validation
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Mohon isi semua field yang diperlukan.");
      event.preventDefault(); // Prevent form submission
    }
  });
feather.replace();
