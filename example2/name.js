(function() {
  const name = document.querySelector('#name');
  const form = document.querySelector('#enterName');
  const input = document.querySelector('input[name=name]');

  function updateName(e) {
    if(input.value !== '') {
      name.innerHTML = `Hello<span class="text-success">${' ' + input.value}</span>!`;
    } else {
      name.innerHTML = 'Enter your name in the box below';
    }
    e.preventDefault();
  }
  form.addEventListener('submit', updateName);
})();
