import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {

  setSearchValue,
  searchAsync,
  selectCountrySearchValue, setSearchValueManually,
} from './countryInputSlice';
import styles from './CountryInput.module.css';

export function CountryInput() {
  const searchString = useAppSelector(selectCountrySearchValue);
  const dispatch = useAppDispatch();
  const [countrySearchValue, setCountrySearchValue] = useState('');

  const incrementValue = countrySearchValue || searchString;

  return (
    <div className="CountryInput">
      {/*<div className={styles.row}>*/}
      {/*  <button*/}
      {/*    className={styles.button}*/}
      {/*    aria-label="Decrement value"*/}
      {/*    onClick={() => dispatch(decrement())}*/}
      {/*  >*/}
      {/*    -*/}
      {/*  </button>*/}
      {/*  <span className={styles.value}>{count}</span>*/}
      {/*  <button*/}
      {/*    className={styles.button}*/}
      {/*    aria-label="Increment value"*/}
      {/*    onClick={() => dispatch(increment())}*/}
      {/*  >*/}
      {/*    +*/}
      {/*  </button>*/}
      {/*</div>*/}

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Search for country"
          value={searchString}
          onChange={(e) => {
            console.info('e.target.value:', e.target.value,
              '\ne.target:', e.target,
              '\nsearchString:', searchString
            );
            dispatch(setSearchValueManually(e.target.value));
            // setCountrySearchValue(e.target.value);
          }}
        />
        {/*<button*/}
        {/*  className={styles.button}*/}
        {/*  onClick={() => dispatch(setSearchValue(incrementValue))}*/}
        {/*>*/}
        {/*  Add Amount*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  className={styles.asyncButton}*/}
        {/*  onClick={() => dispatch(searchAsync(incrementValue))}*/}
        {/*>*/}
        {/*  Add Async*/}
        {/*</button> */}
      </div>

    </div>
  );
}
