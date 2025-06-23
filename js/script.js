document.querySelectorAll('.slider-container').forEach(container => {
      const track = container.querySelector('.slider-track');
      const leftBtn = container.querySelector('.slider-btn.left');
      const rightBtn = container.querySelector('.slider-btn.right');

      let scrollAmount = 0;
      const scrollStep = 220;

      leftBtn.addEventListener('click', () => {
        scrollAmount = Math.max(0, scrollAmount - scrollStep);
        track.style.transform = `translateX(-${scrollAmount}px)`;
      });

      rightBtn.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - container.offsetWidth;
        scrollAmount = Math.min(maxScroll, scrollAmount + scrollStep);
        track.style.transform = `translateX(-${scrollAmount}px)`;
      });
    });