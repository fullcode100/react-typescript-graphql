import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getCountryFromURLCode,
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
  if (countryCode) {
    dispatch(setURLCodeManually(countryCode));
  }
  const country = useAppSelector(getCountryFromURLCode);
  if (country) {
    state.country = country;
  }
  console.info('CountryPage:'
    , '\ncountryCode: ', countryCode
    , '\ncountry: ', country);
  const pageContent = (state.country) ? <Country country={state.country}/> : (<div>Nothing to show</div>);
  return (
    <div className="CountryPage">
      {pageContent}
    </div>
  );
}
