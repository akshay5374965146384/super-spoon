const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form-box.login form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    // You can add validation or authentication logic here if needed
    window.location.href = "index.html"; // Redirect to home page
  });
});
// Login Form Submit
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();

    // Dummy profile pic (user image can be uploaded in signup or from static folder)
    const profilePic = "images/default.jpg";

    // Save in localStorage
    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("profilePic", profilePic);

    // Redirect to index.html
    window.location.href = "index.html";
  });

  // Signup Form Submit
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();

    // Default profile for new signup
    const profilePic = "images/default.jpg";

    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("profilePic", profilePic);

    window.location.href = "index.html";
  });