(function() {
  const btn = document.querySelector('#btnShowHide');
  const box = document.querySelector('#box');

  function showHide() {
    /*Expanded if statement
    if(btn.innerHTML === 'Show Box') {
      btn.innerHTML = 'Hide Box';
    } else {
      btn.innerHTML = 'Show Box';
    }*/
    btn.innerHTML = (btn.innerHTML === 'Show Box') ? 'Hide Box' : 'Show Box';
    box.classList.toggle('hidden');
  }

  btn.addEventListener('click', showHide);
})();
