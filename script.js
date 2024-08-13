$(document).ready(function() {
  $('.Properties-for-Sale-container-slider').slick({
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(' .prev-bttn-sell'),
    nextArrow: $('.next-bttn-sell'),
    autoplay: true,
    autoplaySpeed: 1500,
      responsive: [
          {
              breakpoint: 1050,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 750,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });
});

$(document).ready(function() {
  $('.testimonial-slider').slick({
      dots: true,
  infinite: true,
  speed: 500,
  arrow:false,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector(".hamburger-icon i");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    hamburgerIcon.addEventListener("click", function() {
        mobileMenu.classList.toggle("show");
        hamburgerIcon.classList.toggle("fa-bars");
        hamburgerIcon.classList.toggle("fa-xmark");
});
  });


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 200;
          if (count < target) {
              counter.innerText = `${Math.ceil(count + increment)}`;
              setTimeout(updateCounter, 10);
          } else {
              counter.innerText = target;
          }
      };
      updateCounter();
  });
});
