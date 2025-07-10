export default class PhotoCarousel {
  constructor(photos, options = {}) {
    this.photos = photos;
    this.options = {
      autoplay: true,
      speed: 4000,
      className: '',
      ...options
    };
    this.swiper = null;
  }

  render(container) {
    const carouselContainer = document.createElement('div');
    carouselContainer.className = `photo-carousel ${this.options.className}`;
    
    carouselContainer.innerHTML = `
      <div class="swiper">
        <div class="swiper-wrapper">
          ${this.photos.map(photo => `
            <div class="swiper-slide">
              <img src="${photo.src}" alt="${photo.alt}" />
              ${photo.title ? `
                <div class="photo-caption">
                  <h3>${photo.title}</h3>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `;

    container.appendChild(carouselContainer);
    this.initSwiper(carouselContainer);
  }

  initSwiper(container) {
    // Wait for Swiper to be available
    if (typeof Swiper !== 'undefined') {
      const swiperEl = container.querySelector('.swiper');
      this.swiper = new Swiper(swiperEl, {
        loop: true,
        autoplay: this.options.autoplay ? {
          delay: this.options.speed,
          disableOnInteraction: false,
        } : false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 500,
      });
    } else {
      console.warn('Swiper not loaded');
    }
  }

  destroy() {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  }
}
