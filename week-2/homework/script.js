const menuSection = document.createElement('div');
menuSection.id = 'menuSection';
const menu = document.createElement('select');
const countryInfo = document.createElement('p');
const countryFlag = document.createElement('img');
countryFlag.id = 'countryFlag';
const countryBox = document.createElement('div');
countryBox.id = 'countryBox';
const button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Get Countries';

fetch('https://restcountries.eu/rest/v2/all')
  .then(function(response) {
    return response.json();
  })
  .then(function(countries) {
    countries.map(country => {
      const option = document.createElement('option');
      option.text = country.name;
      option.value = country.name;
      menu.appendChild(option);
    });
    countries.map(country => {
      menu.addEventListener('change', function() {
        const selectedCountry = this.value;
        if (country.name === selectedCountry) {
          let countryName = country.name;
          let countryCapital = country.capital;
          let countryBorders = country.borders;
          countryFlag.src = country.flag;
          countryInfo.innerHTML =
            'The selected country is: ' +
            countryName +
            ' has capital: ' +
            countryCapital +
            '. ' +
            'And its bordering countries are: ' +
            countryBorders;
        }
      });
    });
  });

function getCountries() {
  document.getElementById('checking').style.display = 'block';
  setTimeout(function() {
    menuSection.appendChild(menu);
    document.body.appendChild(menuSection);
  }, 3000);
  setTimeout(function() {
    document.getElementById('checking').style.display = 'none';
  }, 3000);
  button.removeEventListener('click', getCountries);
}
button.addEventListener('click', getCountries);

function getCountryInfo() {
  document.getElementById('checking').style.display = 'block';
  setTimeout(function() {
    countryBox.appendChild(countryFlag);
    countryBox.appendChild(countryInfo);
    document.body.appendChild(countryBox);
  }, 3000);
  setTimeout(function() {
    document.getElementById('checking').style.display = 'none';
  }, 3000);
}

menu.addEventListener('change', getCountryInfo);
