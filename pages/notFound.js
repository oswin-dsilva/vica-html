export default class NotFoundPage {
  render(container) {
    container.innerHTML = `
      <div class="animate-fadeIn">
        <div class="min-h-96 flex items-center justify-center py-16">
          <div class="text-center">
            <div class="mb-8">
              <svg class="mx-auto h-32 w-32 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
            <div class="space-x-4">
              <a href="/" class="btn btn-primary">
                Go Home
              </a>
              <button onclick="history.back()" class="btn btn-secondary">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  destroy() {
    // Clean up any resources if needed
  }
}
