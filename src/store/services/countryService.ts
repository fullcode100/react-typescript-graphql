// A mock function to mimic making an async request for data
import { FetchCountriesAPIResponse } from '../models/CountryModel';

export function fetchSearchString(searchString = 'Can') {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({data: searchString}), 500),
  );
}

export function fetchCountries()  {
  const resourceBase = 'https://countries.trevorblades.com';
  const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
  const options: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      query: `{continents{code,name}, countries{name, code, capital, phone, continent{code}}}`,
    }),
  };
  return fetch(resourceBase, options).then((response)=> response.json());
}

export function fetchCountry(countryCode: string)  {
  const resourceBase = 'https://countries.trevorblades.com';
  const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
  const options: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      query: `{country(code: "${countryCode}"){name, code, capital, phone, continent{code}}}`,
    }),
  };
  return fetch(resourceBase, options).then((response)=> response.json());
}
