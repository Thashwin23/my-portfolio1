export const scrollToSection = (e, id) => {
  e.preventDefault();
  const targetElement = document.querySelector(id);
  if (!targetElement) return;

  const targetPosition = targetElement.offsetTop - 40;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(timeElapsed / duration);
    const newPosition = startPosition + distance * run;

    window.scrollTo(0, newPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
