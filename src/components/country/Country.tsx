import React from 'react';

import styles from './Country.module.css';
import { ICountry } from '../../store/models/CountryModel';

export interface CountryProps {
  country: ICountry;

}

export function Country(props: CountryProps) {
   return (
    <div className={`Country  ${styles.CountryListItem}  `}  >
      <h1>{props.country.name} ({props.country.code})</h1>
      <div className={styles.data}>
        <div className={styles.name}>
          <span className={styles.label}>Name:</span> <span className={styles.value}>{props.country.name}</span>
        </div>
        <div className={styles.capital}>
          <span className={styles.label}>Capital:</span> <span className={styles.value}>{props.country.capital}</span>
        </div>
        <div className={styles.code}>
          <span className={styles.label}>Code:</span> <span className={styles.value}>{props.country.code}</span>
        </div>
        <div className={styles.phone}>
          <span className={styles.label}>Phone code:</span> <span className={styles.value}>{props.country.phone}</span>
        </div>
        <div className={styles.continent}>
          <span className={styles.label}>Continent:</span> <span className={styles.value}>{props.country.continent.code}</span>
        </div>
      </div>
      <div className={styles.action}>
      </div>
    </div>
  );                 
}
