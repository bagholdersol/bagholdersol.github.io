// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = 'none';
    }
});

// Simulated price ticker update
function updatePrice() {
    const price = document.querySelector('.price');
    const change = document.querySelector('.change');
    
    // Simulate random price changes
    setInterval(() => {
        const currentPrice = parseFloat(price.textContent.replace('$', ''));
        const randomChange = (Math.random() - 0.5) * 0.000001;
        const newPrice = currentPrice + randomChange;
        
        price.textContent = '$' + newPrice.toFixed(6);
        
        const percentChange = (randomChange / currentPrice) * 100;
        change.textContent = `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
        change.className = `change ${percentChange >= 0 ? 'positive' : 'negative'}`;
    }, 5000);
}

// Initialize price updates when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updatePrice();
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.feature, .stat, .phase, .team-member').forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}); 