// https://countries.trevorblades.com/
import { Continent } from './ContinentModel';

export interface Country{
  name: string;
  code: string;
  capital: string;
  phone: string;
  continent:{
    code: string;
  }
}
export interface FetchCountriesAPIResult{
     continents:Continent[],
    countries: Country[]
 }
export interface FetchCountriesAPIResponse{
  data:FetchCountriesAPIResult
}