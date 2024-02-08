function adjustPlaceholder() {
  const textarea = document.getElementById("questionTextarea");
  if (window.innerWidth <= 320) {
    textarea.placeholder =
      "How to move the planet in the \n right  direction even faster?";
  } else {
    textarea.placeholder =
      "How to move the planet in the right direction even faster?";
  }
}

// Вызов функции при первой загрузке страницы
adjustPlaceholder();

// Вызов функции при изменении размера окна
window.onresize = adjustPlaceholder;
