import { createIcon } from '../utils/icons.js';

export default class Footer {
  render() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const currentYear = new Date().getFullYear();

    footer.className = 'footer';
    footer.innerHTML = `
      <div class="footer-content">
        <div class="footer-grid">
          <!-- About Section -->
          <div class="footer-section">
            <h2>VICA</h2>
            <p>
              Vasaikars in Canada (VICA) is a vibrant community organization dedicated to connecting, supporting, and celebrating the culture and heritage of Vasaikars in Canada.
            </p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">
                ${createIcon('facebook')}
              </a>
              <a href="#" aria-label="Instagram">
                ${createIcon('instagram')}
              </a>
              <a href="#" aria-label="YouTube">
                ${createIcon('youtube')}
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-section">
            <h2>Quick Links</h2>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/join-us">Join Us</a></li>
              <li><a href="/events">Upcoming Events</a></li>
              <li><a href="/photos">Photo Memories</a></li>
              <li><a href="/reading">Reading Corner</a></li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div class="footer-section">
            <h2>Contact Us</h2>
            <ul class="footer-contact">
              <li>
                <span class="footer-contact-icon">${createIcon('map-pin')}</span>
                <span>Toronto, Ontario, Canada</span>
              </li>
              <li>
                <span class="footer-contact-icon">${createIcon('mail')}</span>
                <a href="mailto:info@vicacanada.com">info@vicacanada.com</a>
              </li>
              <li>
                <span class="footer-contact-icon">${createIcon('phone')}</span>
                <a href="tel:+14165555555">(416) 555-5555</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
          <p>© ${currentYear} Vasaikars in Canada. All rights reserved.</p>
        </div>
      </div>
    `;
  }
}
