import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setSearchValue,
  searchCountriesAsync,
  selectCountrySearchValue, setSearchValueManually, getFilteredCountries, selectFetchStatus,
} from '../../store/reducers/countrySlice';
import styles from './CountryPage.module.css';
import { CountryInput } from '../../components/countryInput/CountryInput';
import { ICountry } from '../../store/models/CountryModel';
import { CountryList } from '../../components/countryList/CountryList';
import {
  selectCountrySearchPageItemsClicked,
  setCountryListItemClick,
  unsetCountryListItemClick,
} from '../../store/reducers/guiSlice';

export function CountrySearchPage() {
  const searchString = useAppSelector(selectCountrySearchValue);
  const filteredCountries: ICountry[] | undefined = useAppSelector(getFilteredCountries);
  const fetchStatus = useAppSelector(selectFetchStatus);
  const countryListItemsClicked = useAppSelector(selectCountrySearchPageItemsClicked);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (fetchStatus !== 'fetched') {
    dispatch(searchCountriesAsync()); // Fetch countries on initial load
  }
  const [countrySearchValue, setCountrySearchValue] = useState('');

  const incrementValue = countrySearchValue || searchString;
  let inputTimeout: any;
  const onCountryInputChange = (inputString: string) => {
    console.info('Change handler from country page:'
      , '\ninputString:', inputString,
    );
    dispatch(setSearchValueManually(inputString));
    if (inputTimeout) {
      clearTimeout(inputTimeout);
    } else {
      inputTimeout = setTimeout(() => {
        // dispatch(setSearchValueManually(inputString));
      }, 500);
    }
  };
  const onCountryListItemClick = (country: ICountry) => {
    console.info('CountrySearchPage -> onCountryInputChange:'
      , '\ninputString:', country,
    );
    if (countryListItemsClicked[country.code]) {
      dispatch(unsetCountryListItemClick(country));
    } else {
      dispatch(setCountryListItemClick(country));
    }    // props.onCountryListItemLick(country);
  };
  const onViewCountryButtonClick = (country: ICountry) => {
    console.info('CountrySearchPage -> onViewCountryButtonClick:'
      , '\ninputString:', country,
    );
    navigate(`/country/${country.code}`);
    return false;
    // if(countryListItemsClicked[country.code]){
    //   dispatch(unsetCountryListItemClick(country));
    // }
    // else{
    //   dispatch(setCountryListItemClick(country));
    // }    // props.onCountryListItemLick(country);
  };

  console.info('CountryPage:'
    , '\nsearchString: ', searchString
    , '\nfilteredCountries: ', filteredCountries);

  return (
    <div className="CountryPage">
      <CountryInput onInputChange={onCountryInputChange} inputValue={searchString}></CountryInput>
      <CountryList
        onInputChange={onCountryInputChange}
        countries={filteredCountries}
        onCountryListItemClick={onCountryListItemClick}
        onViewCountryButtonClick={onViewCountryButtonClick}
        itemsSelected={countryListItemsClicked}
      ></CountryList>
    </div>
  );
}
