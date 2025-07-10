import PhotoCarousel from '../components/photoCarousel.js';

export default class PhotosPage {
  constructor() {
    this.carousel = null;
  }

  render(container) {
    container.innerHTML = `
      <div class="animate-fadeIn">
        <!-- Page Header -->
        <div class="page-header">
          <div class="page-header-bg">
            <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=400&fit=crop" alt="Photo Memories">
            <div class="page-header-overlay"></div>
          </div>
          <div class="page-header-content text-white">
            <h1 class="page-header-title">Photo Memories</h1>
            <p class="page-header-subtitle">
              Relive the beautiful moments and memorable experiences from our community events, 
              festivals, and gatherings throughout the years.
            </p>
          </div>
        </div>

        <!-- Featured Carousel -->
        <section class="py-16">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Featured Moments
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Highlights from our most memorable events and celebrations
              </p>
            </div>
            <div id="featured-carousel" class="mb-8"></div>
          </div>
        </section>

        <!-- Photo Categories -->
        <section class="py-8 bg-gray-50">
          <div class="container">
            <div class="flex flex-wrap gap-4 justify-center">
              <button class="btn btn-secondary active" data-category="all">All Photos</button>
              <button class="btn btn-secondary" data-category="festivals">Festivals</button>
              <button class="btn btn-secondary" data-category="networking">Networking</button>
              <button class="btn btn-secondary" data-category="cultural">Cultural Events</button>
              <button class="btn btn-secondary" data-category="community">Community</button>
            </div>
          </div>
        </section>

        <!-- Photo Gallery -->
        <section class="py-16">
          <div class="container">
            <div id="photo-gallery" class="photo-grid"></div>
          </div>
        </section>

        <!-- Year Sections -->
        <section class="py-16 bg-gray-50">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Memory Lane
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Journey through the years with our community
              </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1540998427433-ba2fe262cffd?w=400&h=200&fit=crop" 
                  alt="2024 Events" 
                  class="w-full h-48 object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">2024 Highlights</h3>
                  <p class="text-gray-600 mb-4">15 events, 1,200+ attendees, countless memories</p>
                  <button class="btn btn-secondary" data-year="2024">View Gallery</button>
                </div>
              </div>
              
              <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=200&fit=crop" 
                  alt="2023 Events" 
                  class="w-full h-48 object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">2023 Memories</h3>
                  <p class="text-gray-600 mb-4">12 events, 800+ attendees, growing community</p>
                  <button class="btn btn-secondary" data-year="2023">View Gallery</button>
                </div>
              </div>
              
              <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=200&fit=crop" 
                  alt="2022 Events" 
                  class="w-full h-48 object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">2022 Beginnings</h3>
                  <p class="text-gray-600 mb-4">8 events, 500+ attendees, new connections</p>
                  <button class="btn btn-secondary" data-year="2022">View Gallery</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Photo Modal -->
        <div id="photo-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
          <div class="max-w-4xl max-h-full p-4">
            <img id="modal-image" src="" alt="" class="max-w-full max-h-full object-contain">
            <button id="close-modal" class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300">
              ×
            </button>
          </div>
        </div>
      </div>
    `;

    this.initializeComponents();
  }

  initializeComponents() {
    this.initFeaturedCarousel();
    this.loadPhotoGallery();
    this.setupFilters();
    this.setupModal();
  }

  initFeaturedCarousel() {
    const carouselContainer = document.getElementById('featured-carousel');
    if (!carouselContainer) return;

    const featuredPhotos = [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1540998427433-ba2fe262cffd?w=800&h=400&fit=crop',
        alt: 'Diwali Celebration 2024',
        title: 'Diwali Celebration 2024'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop',
        alt: 'Cultural Festival',
        title: 'Annual Cultural Festival'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop',
        alt: 'Community Gathering',
        title: 'Community Networking Event'
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=800&h=400&fit=crop',
        alt: 'Summer Picnic',
        title: 'Annual Summer Picnic'
      }
    ];

    this.carousel = new PhotoCarousel(featuredPhotos);
    this.carousel.render(carouselContainer);
  }

  loadPhotoGallery() {
    const gallery = document.getElementById('photo-gallery');
    if (!gallery) return;

    const photos = [
      // Festivals
      {
        src: 'https://images.unsplash.com/photo-1540998427433-ba2fe262cffd?w=300&h=300&fit=crop',
        alt: 'Diwali lights',
        category: 'festivals',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=300&fit=crop',
        alt: 'Cultural dance',
        category: 'festivals',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=300&fit=crop',
        alt: 'Traditional music',
        category: 'festivals',
        year: '2023'
      },
      
      // Networking
      {
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop',
        alt: 'Professional networking',
        category: 'networking',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=300&fit=crop',
        alt: 'Business meeting',
        category: 'networking',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop',
        alt: 'Workshop session',
        category: 'networking',
        year: '2023'
      },
      
      // Cultural Events
      {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        alt: 'Cooking workshop',
        category: 'cultural',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=300&fit=crop',
        alt: 'Language class',
        category: 'cultural',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
        alt: 'Traditional art',
        category: 'cultural',
        year: '2023'
      },
      
      // Community
      {
        src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=300&h=300&fit=crop',
        alt: 'Family picnic',
        category: 'community',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
        alt: 'Volunteer work',
        category: 'community',
        year: '2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop',
        alt: 'Community service',
        category: 'community',
        year: '2023'
      }
    ];

    photos.forEach((photo, index) => {
      const photoItem = document.createElement('div');
      photoItem.className = 'photo-grid-item';
      photoItem.setAttribute('data-category', photo.category);
      photoItem.setAttribute('data-year', photo.year);
      
      photoItem.innerHTML = `
        <img src="${photo.src}" alt="${photo.alt}" data-full-src="${photo.src.replace('300&h=300', '800&h=800')}" />
      `;
      
      gallery.appendChild(photoItem);
    });
  }

  setupFilters() {
    const filterButtons = document.querySelectorAll('[data-category]');
    const photoItems = document.querySelectorAll('.photo-grid-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('bg-orange-600', 'text-white'));
        button.classList.add('bg-orange-600', 'text-white');

        // Filter photos
        photoItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Year filter buttons
    const yearButtons = document.querySelectorAll('[data-year]');
    yearButtons.forEach(button => {
      button.addEventListener('click', () => {
        const year = button.getAttribute('data-year');
        
        // Reset category filter
        filterButtons.forEach(btn => btn.classList.remove('bg-orange-600', 'text-white'));
        filterButtons[0].classList.add('bg-orange-600', 'text-white');

        // Filter by year
        photoItems.forEach(item => {
          if (item.getAttribute('data-year') === year) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });

        // Scroll to gallery
        document.getElementById('photo-gallery').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  setupModal() {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.getElementById('close-modal');

    // Open modal on photo click
    document.addEventListener('click', (e) => {
      const img = e.target.closest('.photo-grid-item img');
      if (img) {
        const fullSrc = img.getAttribute('data-full-src') || img.src;
        modalImage.src = fullSrc;
        modalImage.alt = img.alt;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close modal
    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    };

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  destroy() {
    if (this.carousel) {
      this.carousel.destroy();
      this.carousel = null;
    }
  }
}
