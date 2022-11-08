import React from 'react';

import styles from './CountryList.module.css';
import { Country } from '../../store/models/CountryModel';
import { CountryListItem } from '../countryListItem/CountryListItem';
import { setSearchValueManually } from '../../store/reducers/countrySlice';

export interface CountryListState {
  countries?: Country[];
  maxItems?: number;
}

export interface CountryListProps extends CountryListState {
  onInputChange: (inputString: string) => void;
  onCountryListItemClick: (country: Country) => void;
  itemsSelected: {
    [key: string]: Country;
  };
}


export function CountryList(props: CountryListProps) {
  const state: CountryListState = Object.assign({}, {
    countries: props.countries,
    maxItems: props.maxItems || 20,
  });
  const onCountryListItemClick = (country: Country) => {
    console.info('CountryList -> onCountryInputChange:'
      , '\ninputString:', country,
    );
    props.onCountryListItemClick(country);
  };
  const countryElements = state.countries?.map((country, index) => {
    const isSelected = !!((props.itemsSelected) && (props.itemsSelected[country.code]));
    return (
      <CountryListItem country={country}
                       onCountryListItemClick={onCountryListItemClick}
                       key={country.code}
                       isSelected={isSelected}/>
    );
  }).filter((countryListItem, index) => {
    return index < state.maxItems!;
  });
  return (
    <div className={`CountryList ${styles.CountryList} `}>
      {countryElements}
    </div>
  );
}
