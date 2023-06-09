import React from 'react';

import styles from './CountryListItem.module.css';
import { ICountry } from '../../store/models/CountryModel';

export interface CountryListItemProps {
  country: ICountry;
  onCountryListItemClick: (country: ICountry) => void;
  onViewCountryButtonClick: (country: ICountry) => void;
  isSelected?: boolean;
}

export function CountryListItem(props: CountryListItemProps) {
  const isSelectedClass = (props.isSelected) ? styles.isSelected : '';
  return (
    <div className={`CountryListItem  ${styles.CountryListItem} ${isSelectedClass} `} onClick={(event) => {
      const targetIsButton =  ((event.target as any).tagName?.toLowerCase()) === 'button';

      // if (!targetIsButton) {
        props.onCountryListItemClick(props.country);
      // }
    }}>
      <div className={styles.data}>
        <div className={styles.code}>
          <span className={styles.label}>Code:</span> <span className={styles.value}>{props.country.code}</span>
        </div>
        <div className={styles.name}>
          <span className={styles.label}>Name:</span> <span className={styles.value}>{props.country.name}</span>
        </div>
      </div>
      <div className={styles.action}>
        <button onClick={() => {
          props.onViewCountryButtonClick(props.country);
          return false;
        }}>View
        </button>
      </div>
    </div>
  );
}
