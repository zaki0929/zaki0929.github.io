window.addEventListener("load", function(){
  var menu = document.getElementsByClassName('accordion');
  
  function show(){
    this.nextElementSibling.classList.toggle('hide');
    this.childNodes[1].classList.toggle('active');
  };
  
  for (var i=0; i<menu.length; i++){
    menu[i].addEventListener('click', show);
  }
});
