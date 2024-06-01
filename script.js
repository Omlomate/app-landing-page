document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Hero Section
            document.getElementById('hero-headline').innerText = data.hero.headline;
            document.getElementById('hero-subheadline').innerText = data.hero.subheadline;
            const ctaButtons = data.hero.ctaButtons.map(button => {
                const a = document.createElement('a');
                a.href = button.link;
                a.innerText = button.text;
                return a;
            });
            document.getElementById('cta-buttons').append(...ctaButtons);

            // Features Section
            const features = data.features.map(feature => {
                const div = document.createElement('div');
                div.classList.add('feature');
                div.innerHTML = `
                    <img src="${feature.icon}" alt="${feature.title}">
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                `;
                return div;
            });
            document.getElementById('features-container').append(...features);

            // Testimonials Section
            const testimonials = data.testimonials.map(testimonial => {
                const div = document.createElement('div');
                div.classList.add('testimonial');
                div.innerHTML = `
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    <p>"${testimonial.feedback}"</p>
                    <h4>${testimonial.name}</h4>
                `;
                return div;
            });
            document.getElementById('testimonials-container').append(...testimonials);

            // Pricing Section
            const pricing = data.pricing.map(plan => {
                const div = document.createElement('div');
                div.classList.add('pricing-plan');
                div.innerHTML = `
                    <h3>${plan.plan}</h3>
                    <p>${plan.price}</p>
                    <ul>${plan.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
                `;
                return div;
            });
            document.getElementById('pricing-container').append(...pricing);

            // Screenshots Section
            const screenshots = data.screenshots.map(url => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = "App Screenshot";
                img.addEventListener('click', () => openLightbox(url));
                return img;
            });
            document.getElementById('screenshots-container').append(...screenshots);
        })
        .catch(error => console.error('Error loading data:', error));
});

// Lightbox functionality
function openLightbox(url) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <img class="lightbox-content" src="${url}">
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });

    lightbox.style.display = "block";
}


document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark-mode');

        // Toggle icon
        if (darkModeToggle.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        } else {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        }
    });
});
