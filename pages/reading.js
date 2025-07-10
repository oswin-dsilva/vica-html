export default class ReadingPage {
  render(container) {
    container.innerHTML = `
      <div class="animate-fadeIn">
        <!-- Page Header -->
        <div class="page-header">
          <div class="page-header-bg">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=400&fit=crop" alt="Reading Corner">
            <div class="page-header-overlay"></div>
          </div>
          <div class="page-header-content text-white">
            <h1 class="page-header-title">Reading Corner</h1>
            <p class="page-header-subtitle">
              Discover stories, articles, and insights about Vasai's rich heritage, 
              community experiences in Canada, and cultural preservation.
            </p>
          </div>
        </div>

        <!-- Featured Article -->
        <section class="py-16">
          <div class="container">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Featured Story
              </h2>
            </div>
            <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop" 
                alt="Featured article" 
                class="w-full h-64 object-cover"
              />
              <div class="p-8">
                <div class="flex items-center text-sm text-orange-600 mb-2">
                  <span>Featured • December 15, 2024</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  Preserving Vasai's Culinary Heritage in Canadian Kitchens
                </h3>
                <p class="text-gray-700 mb-6 line-clamp-3">
                  From the bustling streets of Vasai to the multicultural neighborhoods of Toronto, 
                  our culinary traditions have found new homes and evolved with local ingredients. 
                  This article explores how Vasaikar families are preserving traditional recipes 
                  while adapting to Canadian kitchens and local ingredients...
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
                      alt="Author" 
                      class="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p class="font-medium text-gray-900">Priya Fernandes</p>
                      <p class="text-sm text-gray-600">Community Contributor</p>
                    </div>
                  </div>
                  <button class="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Categories -->
        <section class="py-8 bg-gray-50">
          <div class="container">
            <div class="flex flex-wrap gap-4 justify-center">
              <button class="btn btn-secondary active" data-category="all">All Stories</button>
              <button class="btn btn-secondary" data-category="heritage">Heritage</button>
              <button class="btn btn-secondary" data-category="community">Community</button>
              <button class="btn btn-secondary" data-category="culture">Culture</button>
              <button class="btn btn-secondary" data-category="history">History</button>
              <button class="btn btn-secondary" data-category="personal">Personal Stories</button>
            </div>
          </div>
        </section>

        <!-- Articles Grid -->
        <section class="py-16">
          <div class="container">
            <div id="articles-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          </div>
        </section>

        <!-- Newsletter Signup -->
        <section class="py-16 bg-gray-50">
          <div class="container">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p class="text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest stories, articles, and community updates.
              </p>
              <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  class="form-input flex-1"
                  required
                />
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    `;

    this.initializeComponents();
  }

  initializeComponents() {
    this.loadArticles();
    this.setupFilters();
    this.setupNewsletter();
  }

  loadArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;

    const articles = [
      {
        title: "The Journey of Vasaikar Immigrants to Canada",
        excerpt: "Exploring the migration patterns, challenges, and success stories of Vasaikars who made Canada their new home over the decades.",
        author: "Dr. Rajesh Gomes",
        date: "December 10, 2024",
        category: "heritage",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop",
        readTime: "8 min read"
      },
      {
        title: "Konkani Language Preservation in Digital Age",
        excerpt: "How technology is helping preserve and teach Konkani to new generations of Vasaikar-Canadians.",
        author: "Maria D'Silva",
        date: "December 8, 2024",
        category: "culture",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
        readTime: "6 min read"
      },
      {
        title: "Building Bridges: VICA's First Five Years",
        excerpt: "A retrospective look at how VICA grew from a small group of friends to a thriving community organization.",
        author: "Anthony Pereira",
        date: "December 5, 2024",
        category: "community",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
        readTime: "10 min read"
      },
      {
        title: "Traditional Festivals in a New Land",
        excerpt: "How Vasaikar families celebrate traditional festivals while embracing Canadian multiculturalism.",
        author: "Sunita Rodrigues",
        date: "December 1, 2024",
        category: "culture",
        image: "https://images.unsplash.com/photo-1540998427433-ba2fe262cffd?w=400&h=250&fit=crop",
        readTime: "7 min read"
      },
      {
        title: "From Fishing Villages to Tech Hubs",
        excerpt: "The remarkable transformation of Vasaikar professionals in Canada's technology sector.",
        author: "Kevin Fernandes",
        date: "November 28, 2024",
        category: "community",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        readTime: "9 min read"
      },
      {
        title: "The Architecture of Memory: Vasai's Churches",
        excerpt: "Exploring the historical significance of Vasai's churches and their influence on community identity.",
        author: "Fr. John Mendonca",
        date: "November 25, 2024",
        category: "history",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=400&h=250&fit=crop",
        readTime: "12 min read"
      },
      {
        title: "My First Canadian Winter: A Vasaikar's Tale",
        excerpt: "A heartwarming personal account of experiencing the first Canadian winter and finding warmth in community.",
        author: "Liza Noronha",
        date: "November 22, 2024",
        category: "personal",
        image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=400&h=250&fit=crop",
        readTime: "5 min read"
      },
      {
        title: "The Spice Route: Vasai to Vancouver",
        excerpt: "Tracing the culinary journey of Vasaikar spices and their adaptation in Canadian cuisine.",
        author: "Chef Miguel D'Souza",
        date: "November 20, 2024",
        category: "heritage",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=250&fit=crop",
        readTime: "8 min read"
      },
      {
        title: "Young Voices: Second-Generation Perspectives",
        excerpt: "Canadian-born Vasaikars share their experiences of balancing cultural heritage with Canadian identity.",
        author: "Youth Committee",
        date: "November 18, 2024",
        category: "personal",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
        readTime: "11 min read"
      }
    ];

    articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300';
      articleCard.setAttribute('data-category', article.category);
      
      articleCard.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
        <div class="p-6">
          <div class="flex items-center text-xs text-orange-600 font-medium mb-2">
            <span class="capitalize">${article.category}</span>
            <span class="mx-2">•</span>
            <span>${article.readTime}</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">${article.title}</h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3">${article.excerpt}</p>
          <div class="flex items-center justify-between">
            <div class="text-xs text-gray-500">
              <p class="font-medium">${article.author}</p>
              <p>${article.date}</p>
            </div>
            <button class="btn btn-secondary text-sm">Read More</button>
          </div>
        </div>
      `;
      
      articlesGrid.appendChild(articleCard);
    });
  }

  setupFilters() {
    const filterButtons = document.querySelectorAll('[data-category]');
    const articleCards = document.querySelectorAll('#articles-grid > div[data-category]');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('bg-orange-600', 'text-white'));
        button.classList.add('bg-orange-600', 'text-white');

        // Filter articles
        articleCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      
      // Simulate newsletter signup
      console.log('Newsletter signup:', email);
      
      // Show success message
      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = 'Subscribed!';
      button.disabled = true;
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 2000);
    });
  }

  destroy() {
    // Clean up any resources if needed
  }
}
