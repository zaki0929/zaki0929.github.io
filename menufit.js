var menuElm = document.getElementsByClassName("fix");

window.onresize = function () {
  menuElm.style.height = window.innerHeight*0.8;
};
