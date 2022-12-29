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
  $video = document.querySelector(".player > video"),
  $videoDec = document.querySelector(".player.on > .dec");

let dec = document.querySelector(
  ".artist_list>li.on .arti_dec > .dec_text"
).innerHTML;
$videoDec.innerHTML = dec;

for (let i = 0; i < $thumb.length; i++) {}
$thumb.forEach(function (a_list, idx) {
  a_list.addEventListener("click", function (e) {
    e.preventDefault();
    let mp4 = this.getAttribute("data-mp4");
    dec = this.querySelector(".arti_dec > .dec_text").innerHTML;
    $videoDec.innerHTML = dec;

    $player.classList.toggle("on");
    $video.setAttribute("src", mp4);
    artist(idx);
  });
});

function artist(num1) {
  $thumb.forEach(function (img, i) {
    img.classList.remove("on");
  });
  $thumb[num1].classList.add("on");
}
