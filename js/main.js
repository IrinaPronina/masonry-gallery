const workTabs = document.querySelector('.work__tabs');
const galleryItem = document.querySelectorAll('.gallery__item');
const workBtn = document.querySelectorAll('.work__btn');

window.addEventListener('load', () => {
  galleryItem.forEach((el) => {
    el.classList.remove('gallery__item--hidden');
    el.classList.add('gallery__item--visible');
  });
  if (workTabs) {
    workTabs.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('work__btn')) {
        const filter = target.dataset.filter;
        workBtn.forEach((el) => {
          el.classList.remove('work__btn--active');
          target.classList.add('work__btn--active');
        });

        galleryItem.forEach((el) => {
          el.classList.remove('gallery__item--visible');
          el.classList.add('gallery__item--hidden');
        });
        document.querySelectorAll(`[data-target="${filter}"]`).forEach((el) => {
          el.closest('.gallery__item').classList.remove('gallery__item--visible');
          el.closest('.gallery__item').classList.remove('gallery__item--hidden');
          setTimeout(() => {
            el.closest('.gallery__item').classList.add('gallery__item--visible');
          }, 10);
        });

        if (filter == 'all') {
          galleryItem.forEach((el) => {
            el.classList.remove('gallery__item--hidden');
            el.classList.add('gallery__item--visible');
          });
        }
      }
    });
  }
});
