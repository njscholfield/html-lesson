(function() {
  const name = document.querySelector('#name');
  const form = document.querySelector('form');
  const input = document.querySelector('input[name=name]');

  function updateName(e) {
    if(input.value !== '') {
      name.innerHTML = `Hello <span class="user">${input.value}</span>!`;
    } else {
      name.innerHTML = 'Enter your name in the box below';
    }
    e.preventDefault();
  }

  form.addEventListener('submit', updateName);
})();
