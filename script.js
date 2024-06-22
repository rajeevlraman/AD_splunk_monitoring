document.addEventListener('DOMContentLoaded', function() {
    // Select all sidebar links (including links to other pages)
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target section ID or page href
            const target = this.getAttribute('href');

            // Check if the target is a section within the same page or a different page
            if (target.startsWith('#')) {
                // Smooth scroll to section within the same page
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Target section not found:', target);
                }
            } else {
                // Navigate to a different page
                window.location.href = target;
            }
        });
    });
});
