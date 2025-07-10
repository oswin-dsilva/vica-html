import EventCard from '../components/eventCard.js';

export default class EventsPage {
  render(container) {
    container.innerHTML = `
      <div class="animate-fadeIn">
        <!-- Page Header -->
        <div class="page-header">
          <div class="page-header-bg">
            <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=400&fit=crop" alt="Events">
            <div class="page-header-overlay"></div>
          </div>
          <div class="page-header-content text-white">
            <h1 class="page-header-title">Upcoming Events</h1>
            <p class="page-header-subtitle">
              Join us for exciting events that celebrate our culture and bring our community together. 
              From festivals to networking events, there's something for everyone.
            </p>
          </div>
        </div>

        <!-- Events Filter -->
        <section class="py-8 bg-gray-50">
          <div class="container">
            <div class="flex flex-wrap gap-4 justify-center">
              <button class="btn btn-secondary active" data-filter="all">All Events</button>
              <button class="btn btn-secondary" data-filter="cultural">Cultural</button>
              <button class="btn btn-secondary" data-filter="networking">Networking</button>
              <button class="btn btn-secondary" data-filter="educational">Educational</button>
              <button class="btn btn-secondary" data-filter="community">Community</button>
            </div>
          </div>
        </section>

        <!-- Events List -->
        <section class="py-16">
          <div class="container">
            <div id="events-container" class="grid gap-8"></div>
          </div>
        </section>

        <!-- Past Events -->
        <section class="py-16 bg-gray-50">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Past Events
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Take a look at some of our memorable past events
              </p>
            </div>
            <div id="past-events-container" class="grid gap-8"></div>
          </div>
        </section>
      </div>
    `;

    this.initializeComponents();
  }

  initializeComponents() {
    this.loadUpcomingEvents();
    this.loadPastEvents();
    this.setupFilters();
  }

  loadUpcomingEvents() {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;

    const upcomingEvents = [
      {
        title: "Vasai Cultural Festival 2025",
        date: "March 15, 2025",
        location: "Toronto Community Center, 123 Main St, Toronto",
        description: "Join us for our annual cultural festival featuring traditional music, dance performances, authentic Vasai cuisine, and activities for the whole family. Experience the rich heritage of Vasai through art exhibitions, storytelling sessions, and interactive workshops.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop",
        category: "cultural"
      },
      {
        title: "Professional Networking Mixer",
        date: "February 28, 2025",
        location: "Mississauga Library Hall, 301 Burnhamthorpe Rd W",
        description: "Connect with fellow Vasaikar professionals across various industries. Share experiences, explore business opportunities, and build lasting professional relationships. Light refreshments will be provided.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
        category: "networking"
      },
      {
        title: "Youth Leadership Workshop",
        date: "February 20, 2025",
        location: "Brampton Community Center, 85 Central Park Dr",
        description: "Empower young Vasaikars with leadership skills, career guidance, and mentorship opportunities. Interactive sessions covering resume building, interview skills, and professional development.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        category: "educational"
      },
      {
        title: "Konkani Language Classes",
        date: "Every Saturday starting February 10, 2025",
        location: "Oakville Library, 120 Navy St",
        description: "Weekly Konkani language classes for children and adults. Learn to read, write, and speak our mother tongue. Classes are divided by age groups and skill levels.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
        category: "educational"
      },
      {
        title: "Community Volunteer Day",
        date: "April 5, 2025",
        location: "Various locations in GTA",
        description: "Give back to the Canadian community that has welcomed us. Join fellow Vasaikars for a day of community service including park cleanup, food bank assistance, and senior home visits.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
        category: "community"
      },
      {
        title: "Traditional Cooking Workshop",
        date: "March 8, 2025",
        location: "Hamilton Community Kitchen, 150 Main St E",
        description: "Learn to prepare authentic Vasai dishes from experienced home cooks. Hands-on workshop covering traditional recipes, cooking techniques, and ingredient sourcing in Canada.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
        category: "cultural"
      }
    ];

    upcomingEvents.forEach(event => {
      const eventCard = new EventCard(event);
      const cardElement = eventCard.render();
      cardElement.setAttribute('data-category', event.category);
      eventsContainer.appendChild(cardElement);
    });
  }

  loadPastEvents() {
    const pastEventsContainer = document.getElementById('past-events-container');
    if (!pastEventsContainer) return;

    const pastEvents = [
      {
        title: "Diwali Celebration 2024",
        date: "November 1, 2024",
        location: "Mississauga Convention Centre",
        description: "A magnificent celebration of lights with traditional performances, delicious food, and community bonding. Over 500 community members joined us for this memorable evening.",
        image: "https://images.unsplash.com/photo-1540998427433-ba2fe262cffd?w=400&h=250&fit=crop",
        category: "cultural"
      },
      {
        title: "Summer Picnic 2024",
        date: "August 15, 2024",
        location: "Centennial Park, Toronto",
        description: "Annual family picnic with games, music, and traditional food. A perfect day for families to connect and children to make new friendships.",
        image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=250&fit=crop",
        category: "community"
      },
      {
        title: "Business Forum 2024",
        date: "June 10, 2024",
        location: "Toronto Board of Trade",
        description: "Annual business forum featuring keynote speakers, panel discussions on entrepreneurship, and networking opportunities for business professionals.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
        category: "networking"
      }
    ];

    pastEvents.forEach(event => {
      const eventCard = new EventCard(event);
      pastEventsContainer.appendChild(eventCard.render());
    });
  }

  setupFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const eventCards = document.querySelectorAll('[data-category]');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('bg-orange-600', 'text-white'));
        button.classList.add('bg-orange-600', 'text-white');

        // Filter events
        eventCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  destroy() {
    // Clean up any resources if needed
  }
}
