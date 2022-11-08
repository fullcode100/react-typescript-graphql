import React from 'react';

import styles from './CountryList.module.css';
import { ICountry } from '../../store/models/CountryModel';
import { CountryListItem } from '../countryListItem/CountryListItem';

export interface CountryListState {
  countries?: ICountry[];
  maxItems?: number;
}

export interface CountryListProps extends CountryListState {
  onInputChange: (inputString: string) => void;
  onCountryListItemClick: (country: ICountry) => void;
  onViewCountryButtonClick: (country: ICountry) => void;
  itemsSelected: {
    [key: string]: ICountry;
  };
}


export function CountryList(props: CountryListProps) {
  const state: CountryListState = Object.assign({}, {
    countries: props.countries,
    maxItems: props.maxItems || 20,
  });
  const onCountryListItemClick = (country: ICountry) => {
    props.onCountryListItemClick(country);
  };
  const onViewCountryButtonClick = (country: ICountry) => {
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
