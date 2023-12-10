document.addEventListener("DOMContentLoaded", function () {
  
    var sections = document.querySelectorAll('.animate-on-scroll');
    // Your existing code for section animations
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('animate')) {
            entry.target.classList.add('animate','fixedImage');
          }
        } else {
          entry.target.classList.remove('animate','fixedImage');
        }
      });
    }, { threshold: 0.5 });
  
    sections.forEach(function(section) {
      observer.observe(section);
    });
});
