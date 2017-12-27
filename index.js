(function () {
  window.addEventListener('keydown', keyPressed);

  function keyPressed(e) {
    const code = document.querySelector('.keycode');

    code.innerHTML = `You pressed the ${e.keyCode} letter.`;
  } 
})();
