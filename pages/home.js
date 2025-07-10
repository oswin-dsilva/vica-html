import PhotoCarousel from '../components/photoCarousel.js';
import EventCard from '../components/eventCard.js';

export default class HomePage {
  constructor() {
    this.carousel = null;
  }

  render(container) {
    container.innerHTML = `
      <div class="animate-fadeIn">
        <!-- Hero Section -->
        <section class="relative py-16 mb-12">
          <div id="hero-carousel" class="mb-8"></div>
          <div class="container text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to VICA
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connecting Vasaikars across Canada through culture, community, and celebration. 
              Join us in preserving our heritage while building new memories together.
            </p>
            <a href="/join-us" class="btn btn-primary btn-lg">
              Join Our Community
            </a>
          </div>
        </section>

        <!-- About Section -->
        <section class="py-16 bg-gray-50">
          <div class="container">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6">
                  About Vasaikars in Canada
                </h2>
                <p class="text-gray-700 mb-4">
                  VICA is a vibrant community organization that brings together Vasaikars living in Canada. 
                  We celebrate our rich cultural heritage while embracing our Canadian home.
                </p>
                <p class="text-gray-700 mb-6">
                  Through events, gatherings, and cultural programs, we create opportunities for 
                  connection, learning, and celebration for all generations.
                </p>
                <a href="/join-us" class="btn btn-primary">
                  Learn More
                </a>
              </div>
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop" 
                  alt="Community gathering" 
                  class="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Upcoming Events Preview -->
        <section class="py-16">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Join us for exciting events that bring our community together
              </p>
            </div>
            <div id="events-preview" class="grid gap-6 mb-8"></div>
            <div class="text-center">
              <a href="/events" class="btn btn-secondary">
                View All Events
              </a>
            </div>
          </div>
        </section>

        <!-- Community Features -->
        <section class="py-16 bg-gray-50">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Community Events</h3>
                <p class="text-gray-600">Regular gatherings, festivals, and cultural celebrations that bring our community together.</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
                <p class="text-gray-600">Preserving and sharing Vasai's rich traditions, language, and customs with future generations.</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6m6-12H6" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Support Network</h3>
                <p class="text-gray-600">A strong support system helping newcomers and longtime residents connect and thrive in Canada.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    this.initializeComponents();
  }

  initializeComponents() {
    // Initialize hero carousel
    const carouselContainer = document.getElementById('hero-carousel');
    if (carouselContainer) {
      const heroPhotos = [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop',
          alt: 'Community gathering',
          title: 'Building Connections'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1556035511-3168381ea4d4?w=800&h=400&fit=crop',
          alt: 'Cultural celebration',
          title: 'Celebrating Heritage'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop',
          alt: 'Community event',
          title: 'Growing Together'
        }
      ];

      this.carousel = new PhotoCarousel(heroPhotos);
      this.carousel.render(carouselContainer);
    }

    // Load event previews
    this.loadEventPreviews();
  }

  loadEventPreviews() {
    const eventsContainer = document.getElementById('events-preview');
    if (!eventsContainer) return;

    const upcomingEvents = [
      {
        title: "Vasai Cultural Festival 2025",
        date: "March 15, 2025",
        location: "Toronto Community Center",
        description: "Join us for our annual cultural festival featuring traditional music, dance, food, and activities for the whole family.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop"
      },
      {
        title: "Community Networking Event",
        date: "February 28, 2025",
        location: "Mississauga Library Hall",
        description: "Connect with fellow Vasaikars, share experiences, and build lasting professional and personal relationships.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop"
      }
    ];

    upcomingEvents.forEach(event => {
      const eventCard = new EventCard(event);
      eventsContainer.appendChild(eventCard.render());
    });
  }

  destroy() {
    if (this.carousel) {
      this.carousel.destroy();
      this.carousel = null;
    }
  }
}
