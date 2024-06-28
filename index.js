var myCarousel = document.querySelector('#heroCarousel');

var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
