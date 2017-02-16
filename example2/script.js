(function() {
  const rawDataBox = document.querySelector('#rawData');
  const temp = document.querySelector('#temp');
  const timestamp = document.querySelector('#timestamp');
  const rawWeatherData = document.querySelector('#rawWeatherData');
  const toggleBtn = document.querySelector('#toggleBtn');
  const condition = document.querySelector('#condition');
  const navpills = document.querySelectorAll('li[role=presentation]');
  const panels = document.querySelectorAll('section');
  const weatherURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2012763654&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  var weatherData = {};
  var currentPanel = 0;

  function switchPanel(e) {
    var newPanel = e.target.getAttribute('data-panel');
    if(currentPanel !== newPanel) {
      panels[currentPanel].classList.add('hidden');
      navpills[currentPanel].classList.remove('active');
      panels[newPanel].classList.remove('hidden');
      navpills[newPanel].classList.add('active');
      currentPanel = newPanel;
    }
  }

  function getCurrentWeather() {
    fetch(weatherURL)
      .then(blob => blob.json())
      .then(function(data) {
        weatherData = data.query.results.channel.item;
        rawDataBox.innerHTML = JSON.stringify(data, null, 2);
        updateView();
      });
  }

  function updateView() {
    temp.innerHTML = weatherData.condition.temp;
    timestamp.innerHTML = weatherData.condition.date;
    condition.innerHTML = weatherData.condition.text;
  }
  getCurrentWeather();

  function toggleRawData() {
    rawWeatherData.classList.toggle('hidden');
  }
  toggleBtn.addEventListener('click', toggleRawData);
  navpills[0].addEventListener('click', switchPanel);
  navpills[1].addEventListener('click', switchPanel);
})();
