import HomePage from './pages/home.js';
import JoinUsPage from './pages/joinUs.js';
import EventsPage from './pages/events.js';
import PhotosPage from './pages/photos.js';
import ReadingPage from './pages/reading.js';
import NotFoundPage from './pages/notFound.js';

export default class Router {
  constructor() {
    this.routes = {
      '/': HomePage,
      '/join-us': JoinUsPage,
      '/events': EventsPage,
      '/photos': PhotosPage,
      '/reading': ReadingPage
    };
    this.currentPage = null;
  }

  init() {
    // Navigate to current path
    this.navigate(window.location.pathname);
  }

  navigate(path) {
    // Clean up current page
    if (this.currentPage && this.currentPage.destroy) {
      this.currentPage.destroy();
    }

    // Find matching route
    const PageClass = this.routes[path] || NotFoundPage;
    
    // Create new page instance
    this.currentPage = new PageClass();
    
    // Render page
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = '';
      this.currentPage.render(mainContent);
    }

    // Update URL without reload
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    // Update active navigation
    this.updateActiveNavigation(path);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }

  updateActiveNavigation(path) {
    // Remove active class from all nav links
    document.querySelectorAll('.navbar-menu a, .mobile-menu a').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to current page link
    document.querySelectorAll(`a[href="${path}"]`).forEach(link => {
      link.classList.add('active');
    });
  }
}
