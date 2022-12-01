//검색
const $btn_search = document.querySelector(".search_btn"),
  $searchCon = document.querySelector(".search_con");

$btn_search.addEventListener("click", function () {
  $aside.classList.remove("on");
  $btnHam.classList.remove("on");
  $searchCon.classList.toggle("on");
  document.body.classList.toggle("scollLock");
});

//검색버튼모양
const $btnSearch = document.querySelector(".search_btn");
$btnSearch.addEventListener("click", function () {
  this.classList.toggle("on");
});

//메뉴
const $btn_menu = document.querySelector(".menu_btn"),
  $aside = document.querySelector(".aside"),
  $gnbLi = document.querySelectorAll(".gnb > li");

$btn_menu.addEventListener("click", function () {
  document.body.classList.toggle("scollLock");
  $aside.classList.toggle("on");
  $searchCon.classList.remove("on");
  $btnSearch.classList.remove("on");
});

//menu버튼모양
const $btnHam = document.querySelector(".menu_btn");
$btnHam.addEventListener("click", function () {
  this.classList.toggle("on");
});

//sec2 탭메뉴
const $tabBtn = document.querySelectorAll(".critic_list > li");
const $tabCon = document.querySelectorAll(".critic_thumb > li");

$tabBtn.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    tabMenu(idx);
    thumbImg(idx);
  });
});

function tabMenu(num) {
  $tabBtn.forEach(function (tabCon, i) {
    tabCon.classList.remove("on");
  });
  $tabBtn[num].classList.add("on");
}

function thumbImg(num) {
  $tabCon.forEach(function (img, i) {
    img.classList.remove("on");
  });
  $tabCon[num].classList.add("on");
}

//sec5 탭메뉴
const $thumb = document.querySelectorAll(".artist_list > li"),
  $player = document.querySelector(".player"),
  $video = document.querySelector(".player > video");

for (let i = 0; i < $thumb.length; i++) {}
$thumb.forEach(function (a_list, idx) {
  a_list.addEventListener("click", function () {
    e.preventDefault();
    let mp4 = this.getAttribute("data-mp4");
    $player.classList.remove("on");
    $video.setAttribute("src", mp4);
    $player.classList.add("on");
    artist(idx);
  });
});

function artist(num1) {
  $thumb.forEach(function (img, i) {
    img.classList.remove("on");
  });
  $thumb[num1].classList.add("on");
}

/////////////////////////////////////swiper
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
