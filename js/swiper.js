//banner slide
var swiper = new Swiper(".slide1", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".slide2", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//sec1 slide
var swiper = new Swiper(".slide3", {
  slidesPerView: 5,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

//sec4 slide
var swiper = new Swiper(".slide4", {
  slidesPerView: 3,
  spaceBetween: 60,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
