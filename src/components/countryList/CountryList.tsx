import React from 'react';

import styles from './CountryList.module.css';
import { Country } from '../../store/models/CountryModel';
import { CountryListItem } from '../countryListItem/CountryListItem';

export interface CountryListState {
  countries?: Country[];
  maxItems?: number;
}

export interface CountryListProps extends CountryListState {
  onInputChange: (inputString: string) => void;
}


export function CountryList(props: CountryListProps) {
  const state: CountryListState = Object.assign({}, {
    countries: props.countries,
    maxItems: props.maxItems || 20,
  });
  const countryElements = state.countries?.map((country, index) => {
    return (
      <CountryListItem country={country} key={country.code} ></CountryListItem>
    );
  }).filter((countryListItem, index) => {
       return index < state.maxItems!;
   });
  return (
    <div className={ `CountryList ${styles.CountryList} ` }>
      {countryElements}
    </div>
  );
}
