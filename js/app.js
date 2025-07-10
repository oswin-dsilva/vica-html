import Router from './router.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

class App {
  constructor() {
    this.router = new Router();
    this.navbar = new Navbar();
    this.footer = new Footer();
    this.init();
  }

  init() {
    // Initialize components
    this.navbar.render();
    this.footer.render();
    
    // Initialize router
    this.router.init();
    
    // Handle navigation
    this.handleNavigation();
  }

  handleNavigation() {
    // Handle link clicks for SPA navigation
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="/"], a[href^="#/"]');
      if (link && !link.hasAttribute('target')) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#/')) {
          this.router.navigate(href.substring(1));
        } else {
          this.router.navigate(href);
        }
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.router.navigate(window.location.pathname);
    });
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
