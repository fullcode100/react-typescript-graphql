import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAllCountriesAsync,
  selectCountrySearchValue,
  setSearchValueManually,
  getFilteredCountries,
  selectFetchAllCountriesStatus,
  resetCountryState,
} from '../../store/reducers/countrySlice';
import styles from './CountrySearchPage.module.css';
import { CountryInput } from '../../components/countryInput/CountryInput';
import { ICountry } from '../../store/models/CountryModel';
import { CountryList } from '../../components/countryList/CountryList';
import {
  resetGUIState,
  selectCountrySearchPageItemsClicked,
  setCountryListItemClick,
  unsetCountryListItemClick,
} from '../../store/reducers/guiSlice';
import { Reset } from '../../components/reset/Reset';

export function CountrySearchPage() {
  const searchString = useAppSelector(selectCountrySearchValue);
  const filteredCountries: ICountry[] | undefined = useAppSelector(getFilteredCountries);
  const fetchStatus = useAppSelector(selectFetchAllCountriesStatus);
  const countryListItemsClicked = useAppSelector(selectCountrySearchPageItemsClicked);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (fetchStatus !== 'fetched') {
    if (fetchStatus !== 'loading') {                                     
      dispatch(fetchAllCountriesAsync()); // Fetch countries on initial load
    }
  }
  const onCountryInputChange = (inputString: string) => {
    dispatch(setSearchValueManually(inputString));
  };
  const onCountryListItemClick = (country: ICountry) => {
    if (countryListItemsClicked[country.code]) {
      dispatch(unsetCountryListItemClick(country));
    } else {
      dispatch(setCountryListItemClick(country));
    }

  };
  const onResetButtonClick = () => {
    dispatch(resetCountryState());
    dispatch(resetGUIState());

  };
  const onViewCountryButtonClick = (country: ICountry) => {
    navigate(`/country/${country.code}`);
    return false;
  };
  return (
    <div className={`CountrySearchPage  ${styles.CountrySearchPage}   `}>
      <CountryInput onInputChange={onCountryInputChange} inputValue={searchString}></CountryInput>
      <CountryList
        onInputChange={onCountryInputChange}
        countries={filteredCountries}
        onCountryListItemClick={onCountryListItemClick}
        onViewCountryButtonClick={onViewCountryButtonClick}
        itemsSelected={countryListItemsClicked}
      ></CountryList>
      <div className={` ${styles.resetContainer} `}><Reset onResetButtonClick={onResetButtonClick}></Reset></div>
    </div>
  );
}
