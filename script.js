const toggleButton = document.getElementsByClassName("toggle-button")[0];
const numberlinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  numberlinks.classList.toggle("active");
});