// Search and Filter Functionality for Blog Page
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const postsContainer = document.getElementById('posts-container');

    if (searchInput && categoryFilter && postsContainer) {
        const posts = postsContainer.querySelectorAll('.post-item');

        function filterPosts() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            posts.forEach(post => {
                const title = post.querySelector('h2').textContent.toLowerCase();
                const content = post.querySelector('p').textContent.toLowerCase();
                const category = post.getAttribute('data-category');

                const matchesSearch = title.includes(searchTerm) || content.includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

                if (matchesSearch && matchesCategory) {
                    post.style.display = 'flex';
                } else {
                    post.style.display = 'none';
                }
            });
        }

        searchInput.addEventListener('input', filterPosts);
        categoryFilter.addEventListener('change', filterPosts);
    }
});

// Newsletter Form Submission (Placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            form.reset();
        });
    });
});

// Contact Form Submission (Placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile Navigation Toggle (if needed in future)
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-nav-active');
}

// Lazy Loading for Images (Placeholder for future optimization)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
