import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const refs = {
    searchBox: document.querySelector("input#search-box"),
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(catchInput, DEBOUNCE_DELAY));

function catchInput(evt){
    evt.preventDefault();

    let searchCountry = refs.searchBox.value.trim();
    console.log(searchCountry);

    fetchCountries(searchCountry);

    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
  
    if (!searchCountry) {
      return;
    }

};

function fetchCountries(country) {
    console.log(`Hello fetchCountries: ${country}`);

    fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`)

    .then(response => {
        if(!response.ok || response.status === 404){
            throw new Error(Notiflix.Notify.failure('Oops, there is no country with that name'));
        }
        return response.json();
    })
    .then(data => {

        if(data.length >= 10){
            throw new Error(Notiflix.Notify.info('Too many matches found. Please enter a more specific name.'));
        };
        if(data.length >2 && data.length <= 9){
            return renderCountryList(data)
        }
        renderCountryInfo(data)
        console.log('Then 2: data ', data[0])
    
    })
    // .catch(error => {
    //     // console.log('This is ERROR !!!! ', error)
    //     Notiflix.Notify.failure('Oops, there is no country with that name')
    // });


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
            <p><img src="${country.flags.svg}" alt="country flag ${country.name}" width='35' height='20'></img> <b>Name</b>: ${country.name.official}</p>
          </li>`;
      })
      .join("");
    refs.countryList.innerHTML = markup;
  };

  function renderCountryInfo(country) {
    const markup = country
      .map((country) => {
        return `<li>        
            <p style="font-size:24px;"><img src="${country.flags.svg}" alt="country flag ${country.name}" width='70' height='40'></img> <b>Name</b>: ${country.name.official}</p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Languages</b>: ${Object.values(country.languages)}</p>
          </li>`;
      })
      .join("");
    refs.countryInfo.innerHTML = markup;
  };
