function moveElement() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var elementToMove = document.getElementById("image");
  var targetDiv = document.getElementById("blogItem");

  if (screenWidth <= 320) {
    // Перемещаем элемент, если ширина экрана 320px или меньше
    targetDiv.appendChild(elementToMove);
  } else {
    // Опционально: можно вернуть элемент обратно, если ширина больше 320px
    // Необходимо знать исходный контейнер или условно его определить
    // document.getElementById('second-div').appendChild(elementToMove);
  }
}

// Вызываем функцию при загрузке страницы
moveElement();

// Вызываем функцию при изменении размера окна
window.onresize = moveElement;
