const emailBtn = document.getElementById("emailBtn");
const emailBtnLabel = document.getElementById("emailBtnLabel");
const emailBtnLabelItem = document.getElementById("emailBtnLabelItem");
const emailInput = document.getElementById("emilInput");

emailBtn.addEventListener("mouseenter", function () {
  emailBtnLabel.style.border = "1px solid #F22121";
  emailBtnLabelItem.style.background = "#F22121";
});

emailBtn.addEventListener("mouseleave", function () {
  if (!emailBtn.classList.contains("form-email-button__active")) {
    emailBtnLabel.style.border = "1px solid #747474";
    emailBtnLabelItem.style.background = "#747474";
  }
});

const tgBtn = document.getElementById("tgBtn");
const tgBtnLabel = document.getElementById("tgBtnLabel");
const tgBtnLabelItem = document.getElementById("tgBtnLabelItem");
const tgInput = document.getElementById("tgInput");

tgBtn.addEventListener("mouseenter", function () {
  tgBtnLabel.style.border = "1px solid #F22121";
  tgBtnLabelItem.style.background = "#F22121";
});

tgBtn.addEventListener("mouseleave", function () {
  if (!tgBtn.classList.contains("form-email-button__active")) {
    tgBtnLabel.style.border = "1px solid #747474";
    tgBtnLabelItem.style.background = "#747474";
  }
});

tgBtn.onclick = () => {
  if (emailBtn.classList.contains("form-email-button__active")) {
    emailBtn.classList.remove("form-email-button__active");

    emailBtnLabel.classList.remove("form-email-button-label__active");
    emailBtnLabel.style.border = "1px solid #747474";

    emailBtnLabelItem.classList.remove("form-email-button-label-item__active");
    emailBtnLabelItem.style.background = "#747474";

    emailInput.style.display = "none";

    tgBtn.classList.add("form-email-button__active");

    tgBtnLabel.classList.add("form-email-button-label__active");

    tgBtnLabelItem.classList.add("form-email-button-label-item__active");

    tgInput.style.display = "block";
  }
};

emailBtn.onclick = () => {
  if (tgBtn.classList.contains("form-email-button__active")) {
    tgBtn.classList.remove("form-email-button__active");

    tgBtnLabel.classList.remove("form-email-button-label__active");
    tgBtnLabel.style.border = "1px solid #747474";

    tgBtnLabelItem.classList.remove("form-email-button-label-item__active");
    tgBtnLabelItem.style.background = "#747474";

    tgInput.style.display = "none";

    emailBtn.classList.add("form-email-button__active");

    emailBtnLabel.classList.add("form-email-button-label__active");

    emailBtnLabelItem.classList.add("form-email-button-label-item__active");

    emailInput.style.display = "block";
  }
};
