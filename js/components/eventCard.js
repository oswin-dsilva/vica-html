import { createIcon } from '../utils/icons.js';

export default class EventCard {
  constructor({ title, date, location, description, image }) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.description = description;
    this.image = image;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
      <div class="event-card-content">
        <div class="event-card-image">
          <img src="${this.image}" alt="${this.title}" />
        </div>
        <div class="event-card-body">
          <div class="event-date">
            <span class="event-date-icon">${createIcon('calendar')}</span>
            <p class="event-date-text">${this.date}</p>
          </div>
          <a href="#" class="block">
            <h3 class="event-title">${this.title}</h3>
            <p class="event-location">${this.location}</p>
          </a>
          <p class="event-description line-clamp-3">${this.description}</p>
          <div class="mt-4">
            <button class="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    `;

    return card;
  }
}
