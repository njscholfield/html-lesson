(function() {
  const form = document.querySelector('#myForm');
  const dropdown = document.querySelector('#dropdown');
  const message = 'Donald Trump is ';

  function showValue(e) {
    alert(message + dropdown.value);
    e.preventDefault();
  }

  form.addEventListener('submit', showValue);
})();
