document.addEventListener("DOMContentLoaded", () => {
  const questionItems = document.querySelectorAll(".questions-item");

  questionItems.forEach((item) => {
    item.addEventListener("click", function () {
      const descr = this.querySelector(".questions-item-descr");
      const isVisible = descr.classList.contains("visible");

      // Переключение состояния видимости
      if (isVisible) {
        // Убираем класс 'visible' и добавляем 'hide-immediately' для мгновенного скрытия
        descr.classList.remove("visible");
        descr.classList.add("questions-item-descr-hide");
        setTimeout(() => {
          descr.style.visibility = "hidden";
          descr.style.opacity = "0";
        }, 200); // Соответствует продолжительности анимации для opacity
      } else {
        // Удаляем класс 'hide-immediately' и добавляем 'visible' для анимации показа
        descr.classList.remove("questions-item-descr-hide");
        descr.style.visibility = "visible";
        descr.style.opacity = "1";
        descr.classList.add("visible");
        descr.style.maxHeight = "500px"; // Достаточно большое значение для содержимого
      }

      // Анимация отступа для заголовка
      const title = this.querySelector(".questions-item-title");
      title.style.marginBottom = isVisible ? "0" : "18px";
    });
  });
});
