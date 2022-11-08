import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    searchBox: document.querySelector("input#search-box"),
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(catchInput, DEBOUNCE_DELAY));

function catchInput(evt){
    let searchCountry = refs.searchBox.value.trim();
    console.log(searchCountry);

    fetchCountries(searchCountry);

    // fetchCountries(searchCountry)
    // .then((countries) => renderCountryList(countries))
    // .catch((error) => console.log(error));
};

function fetchCountries(country) {
    console.log(`Hello fetchCountries: ${country}`);

    // All COUNTRIES
    fetch(`https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.starus);
        }
        console.log('Then 1: response ', response)
        return response.json();
    })
    // .then(data => {
    //     console.log('Then 2: data ')
    // })
    .catch(error => {
        console.log('This is ERROR !!!! ', error)
    });


    // single COUNTER (test)

    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then(response => {
    //     console.log('Then 1: response ', response)
    // })
    // .then(data => {
    //     console.log('Then 2: data ', data)
    // })
    // .catch(error => {
    //     console,log('This is ERROR !!!! ', error)
    // });

};

// EXAMPLE RENDER!!!! from conspect

function renderCountryList(countries) {
    const markup = countries
      .map((country) => {
        return `<li>
            <p>flags: ${country.flags.svg}</p>
            <p>Name: ${country.name.official}</p>
          </li>`;
      })
      .join("");
    refs.countryList.innerHTML = markup;
  };

  function renderCountryInfo(country) {
    const markup = country
      .map((country) => {
        return `<li>
            <p><b>Name</b>: ${country.name.official}</p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Flags.svg</b>: ${country.flags.svg}</p>
            <p><b>Languages</b>: ${country.languages}</p>
          </li>`;
      })
      .join("");
    refs.countryInfo.innerHTML = markup;
  };