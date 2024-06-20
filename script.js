document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1); // Remove '#' from href
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});
