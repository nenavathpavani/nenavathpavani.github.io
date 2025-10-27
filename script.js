// Minimal JS for smooth scrolling (optional)
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal links (if added later)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});