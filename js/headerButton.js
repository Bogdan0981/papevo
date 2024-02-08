const rusButton = document.getElementById("rus");
const engButton = document.getElementById("eng");

engButton.addEventListener("click", function () {
  if (rusButton.classList.contains("header-button__active")) {
    rusButton.classList.remove("header-button__active");
    engButton.classList.add("header-button__active");
  }
});

rusButton.addEventListener("click", function () {
  if (engButton.classList.contains("header-button__active")) {
    engButton.classList.remove("header-button__active");
    rusButton.classList.add("header-button__active");
  }
});
