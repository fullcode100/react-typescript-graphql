import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCountryFromURLCode, searchCountryAsync, selectCountryCodeInURL, selectFetchOneCountryStatus,
  setURLCodeManually,
} from '../../store/reducers/countrySlice';
import { ICountry } from '../../store/models/CountryModel';
import { Country } from '../../components/country/Country';
import styles from '../CountrySearchPage/CountrySearchPage.module.css';

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
  const pageContent = (state.country) ? <Country country={state.country}/> : (<div>Loading...</div>);
  return (
    <div className={`CountryPage  ${styles.CountryPage}`}>
      {pageContent}
    </div>
  );
}
