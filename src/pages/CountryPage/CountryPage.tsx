import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAllCountriesAsync,
  getCountryFromURLCode, searchCountryAsync, selectCountryCodeInURL, selectFetchOneCountryStatus,
  setURLCodeManually,
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
import { Country } from '../../components/country/Country';
import { fetchCountry } from '../../store/services/countryService';

export interface CountryPageState {
  country?: ICountry;
  countryCode?: string;
}

export interface CountryPageProps extends CountryPageState {
  country?: ICountry;
  countryCode?: string;
}

export function CountryPage(props: CountryPageProps) {
  const state: CountryPageState = Object.assign({}, props);
  let urlParams = useParams();
  const dispatch = useAppDispatch();
  const countryCode = urlParams.countryCode;
  const urlCodeInStore = useAppSelector(selectCountryCodeInURL);
  if (urlCodeInStore !== countryCode) {
    dispatch(setURLCodeManually(countryCode!));
  }
  const country = useAppSelector(getCountryFromURLCode);
  const countryFetchStatus = useAppSelector(selectFetchOneCountryStatus);
  if (countryCode) {
    if (country) {
      state.country = country;
    } else {
      if ((countryFetchStatus !== 'fetched') && (countryFetchStatus !== 'loading')) {
        setTimeout(() => {
          dispatch(searchCountryAsync(countryCode)); // Fetch country if country not fetched
        }, 100);
      }
    }
  }
  console.info('CountryPage:'
    , '\ncountryCode: ', countryCode
    , '\ncountry: ', country);
  const pageContent = (state.country) ? <Country country={state.country}/> : (<div>Loading...</div>);
  return (
    <div className="CountryPage">
      {pageContent}
    </div>
  );
}
