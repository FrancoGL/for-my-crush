function moveToRandomPosition(element) {
  element.style.position = "absolute";
  element.style.top =
    Math.random() * (window.innerHeight - element.offsetHeight) + "px";
  element.style.left =
    Math.random() * (window.innerWidth - element.offsetWidth) + "px";
}

let btnYes = document.getElementById("btn_yes");
let btnNo = document.getElementById("btn_no");
let sectionSexMode = document.getElementsByClassName("sex_mode")[0];

btnNo.addEventListener("mouseenter", function (e) {
  moveToRandomPosition(e.target);
});

btnYes.addEventListener("click", function (e) {
  alert("I knew that you will tell me YES. Lets marrying us now and let's have children. I LOVE YOU!!!❤️")
  sectionSexMode.style.display = "block"
  const music = new Audio('./img/img_modo_hot.mp3')
  music.play()
});
