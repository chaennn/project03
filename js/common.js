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

console.log(
  `
  :::    :::  ::::::::::  :::         :::          ::::::::  
  :+:    :+:  :+:         :+:         :+:         :+:    :+: 
  +:+    +:+  +:+         +:+         +:+         +:+    +:+ 
  +#++:++#++  +#++:++#    +#+         +#+         +#+    +:+ 
  +#+    +#+  +#+         +#+         +#+         +#+    +#+ 
  #+#    #+#  #+#         #+#         #+#         #+#    #+# 
  ###    ###  ##########  ##########  ##########   ########                                             
`
);
console.log("https://github.com/chaennn/portfolio");
console.log(
  `%c카카오톡 ID입니다. 용건이 있으시면 연락주세요:) chaen_hhh`,
  `color:white`
);
