document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(".hero-numbers-item-title");

  elements.forEach((el) => {
    observer.observe(el);
  });

  function animateNumbers() {
    elements.forEach((el, index) => {
      if (index < 3) {
        const targetValue = parseInt(el.textContent.match(/\d+/), 10);
        if (isNaN(targetValue)) return;

        let startTime = null;
        const duration = 2000;

        const updateCounter = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsedTime = timestamp - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          el.textContent = Math.floor(progress * targetValue).toString();
          if (index === 0 && progress === 1) {
            el.textContent += " М+";
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);
      }
    });
  }
});
