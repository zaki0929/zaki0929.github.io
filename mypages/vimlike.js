document.onkeydown = function(event) {
    if(event.keyCode === 72) window.scrollBy(-20, 0);
    if(event.keyCode === 74) window.scrollBy(0, 20);
    if(event.keyCode === 75) window.scrollBy(0, -20);
    if(event.keyCode === 76) window.scrollBy(20, 0);
}
