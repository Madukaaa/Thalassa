document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.pathname;
    var navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute('href');
        if(currentLocation.endsWith(linkPath) || 
           (linkPath === 'home.html' && currentLocation.endsWith('/'))) {
            link.classList.add('active');
        }
    });
});