import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {

  setSearchValue,
  searchAsync,
  selectCountrySearchValue, setSearchValueManually,
} from '../../store/reducers/countrySlice';
import styles from './CountryInput.module.css';

export function CountryInput() {
  const searchString = useAppSelector(selectCountrySearchValue);
  const dispatch = useAppDispatch();
  const [countrySearchValue, setCountrySearchValue] = useState('');

  const incrementValue = countrySearchValue || searchString;

  return (
    <div className="CountryInput">
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
            dispatch(searchAsync('' ));
            // setCountrySearchValue(e.target.value);
          }}
        /> 
      </div>

    </div>
  );
}
