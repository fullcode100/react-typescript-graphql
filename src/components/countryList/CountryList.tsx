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
  onCountryListItemClick: (country: Country) => void;
  onViewCountryButtonClick: (country: Country) => void;
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
    props.onCountryListItemClick(country);
  };
  const onViewCountryButtonClick = (country: Country) => {
    props.onViewCountryButtonClick(country);
  };

  const countryElements = state.countries?.map((country, index) => {
    const isSelected = !!((props.itemsSelected) && (props.itemsSelected[country.code]));
    return (
      <CountryListItem country={country}
                       onCountryListItemClick={onCountryListItemClick}
                       onViewCountryButtonClick={onViewCountryButtonClick}
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
