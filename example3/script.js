(function() {
  const form = document.querySelector('#myForm');
  const dropdown = document.querySelector('#dropdown');
  const textbox = document.querySelector('#trumpsbutt');
  const message = 'Donald Trump is ';

  function showValue(e) {
    alert(message + dropdown.value + '\n' + textbox.value);
    e.preventDefault();
  }

  form.addEventListener('submit', showValue);
})();
