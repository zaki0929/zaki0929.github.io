window.addEventListener("load", function(){
  var menu = document.getElementsByClassName('accordion');
  
  function show(){
    this.classList.toggle('push');
    this.nextElementSibling.classList.toggle('hide');
  };
  
  for (var i=0; i<menu.length; i++){
    menu[i].addEventListener('click', show);
  }
});
