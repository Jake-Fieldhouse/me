(function () {
  const panels = document.querySelectorAll('.panel');
  const scrollText = document.querySelector('.scroll-text');
  const scrollArrow = document.querySelector('.scroll-arrow');
  let index = 0;
  let locked = false;

  function update() {
    panels.forEach((panel, i) => {
      panel.style.transform = `translateY(${(i - index) * 100}vh)`;
    });
    scrollText.style.opacity = index === 0 ? '1' : '0';
    scrollArrow.style.opacity = index === panels.length - 1 ? '0' : '1';
  }

  function navigate(delta) {
    if (locked) return;
    const next = Math.min(Math.max(index + delta, 0), panels.length - 1);
    if (next === index) return;
    index = next;
    locked = true;
    update();
    setTimeout(() => {
      locked = false;
    }, 800);
  }

  window.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      navigate(e.deltaY > 0 ? 1 : -1);
    },
    { passive: false }
  );

  let touchStartY = 0;
  window.addEventListener(
    'touchstart',
    (e) => {
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  window.addEventListener(
    'touchend',
    (e) => {
      const deltaY = touchStartY - e.changedTouches[0].screenY;
      if (Math.abs(deltaY) > 50) navigate(deltaY > 0 ? 1 : -1);
    },
    { passive: true }
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') navigate(1);
    if (e.key === 'ArrowUp') navigate(-1);
  });

  update();
})();

