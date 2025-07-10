export default class JoinForm {
  constructor() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    this.submitted = false;
  }

  render(container) {
    if (this.submitted) {
      this.renderSuccessMessage(container);
    } else {
      this.renderForm(container);
    }
  }

  renderForm(container) {
    container.innerHTML = `
      <div class="max-w-2xl mx-auto card">
        <div class="card-body">
          <form id="join-form" class="space-y-6">
            <div class="form-group">
              <label for="name" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="form-input"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div class="form-group">
              <label for="phone" class="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="form-input"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="form-textarea"
                placeholder="Tell us a bit about yourself..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                class="btn btn-primary btn-lg w-full"
              >
                Join the Community
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    this.bindFormEvents();
  }

  renderSuccessMessage(container) {
    container.innerHTML = `
      <div class="success-message">
        <div class="success-icon">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="success-title">Thank You for Joining!</h2>
        <p class="success-description">
          We've received your information and will be in touch soon. We're excited to welcome you to the Vasaikar community in Canada!
        </p>
        <button 
          id="submit-another"
          class="btn btn-primary"
        >
          Submit Another Response
        </button>
      </div>
    `;

    document.getElementById('submit-another').addEventListener('click', () => {
      this.submitted = false;
      this.formData = { name: '', email: '', phone: '', message: '' };
      this.render(container);
    });
  }

  bindFormEvents() {
    const form = document.getElementById('join-form');
    if (!form) return;

    // Handle input changes
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        this.formData[e.target.name] = e.target.value;
      });
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    // In a real application, you would send this data to a server
    console.log('Form submitted:', this.formData);
    
    // Simulate API call
    setTimeout(() => {
      this.submitted = true;
      const container = document.querySelector('#main-content > div');
      if (container) {
        this.render(container);
      }
    }, 500);
  }
}
