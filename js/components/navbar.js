import { createIcon } from '../utils/icons.js';

export default class Navbar {
  constructor() {
    this.isMenuOpen = false;
  }

  render() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    navbar.className = 'navbar';
    navbar.innerHTML = `
      <div class="navbar-container">
        <div class="navbar-content">
          <div class="navbar-brand">
            <a href="/">
              <span class="navbar-logo">VICA</span>
              <span class="navbar-text">Vasaikars in Canada</span>
            </a>
          </div>
          
          <div class="navbar-menu">
            <a href="/">Home</a>
            <a href="/join-us">Join Us</a>
            <a href="/events">Upcoming Events</a>
            <a href="/photos">Photo Memories</a>
            <a href="/reading">Reading Corner</a>
          </div>
          
          <div class="navbar-toggle">
            <button id="mobile-menu-button" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <span id="menu-icon">${createIcon('menu')}</span>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="mobile-menu">
        <div class="mobile-menu-content">
          <a href="/">Home</a>
          <a href="/join-us">Join Us</a>
          <a href="/events">Upcoming Events</a>
          <a href="/photos">Photo Memories</a>
          <a href="/reading">Reading Corner</a>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const menuButton = document.getElementById('mobile-menu-button');
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton) {
      menuButton.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        
        if (this.isMenuOpen) {
          mobileMenu.classList.add('show');
          menuIcon.innerHTML = createIcon('x');
          menuButton.setAttribute('aria-expanded', 'true');
        } else {
          mobileMenu.classList.remove('show');
          menuIcon.innerHTML = createIcon('menu');
          menuButton.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !e.target.closest('.navbar')) {
        this.closeMobileMenu();
      }
    });
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const menuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu) mobileMenu.classList.remove('show');
    if (menuIcon) menuIcon.innerHTML = createIcon('menu');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
  }
}
