// https://countries.trevorblades.com/
import { Continent } from './ContinentModel';

export interface ICountry {
  name: string;
  code: string;
  capital: string;
  phone: string;
  continent: {
    code: string;
  };
}

export interface FetchCountriesAPIResult {
  continents: Continent[],
  countries: ICountry[]
}

export interface FetchCountriesAPIResponse {
  data: FetchCountriesAPIResult;
}

export interface FetchCountryAPIResult {
  country: ICountry;
}

export interface FetchCountryAPIResponse {
  data: FetchCountryAPIResult;
}