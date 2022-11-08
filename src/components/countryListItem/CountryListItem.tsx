import React from 'react';

import styles from './CountryListItem.module.css';
import { Country } from '../../store/models/CountryModel';

export interface CountryListItemProps {
  country: Country;
  onCountryListItemClick: (country: Country) => void;
  isSelected?: boolean;
}

export function CountryListItem(props: CountryListItemProps) {
  const isSelectedClass = (props.isSelected) ? styles.isSelected : '';
  return (
    <div className={`CountryListItem  ${styles.CountryListItem} ${isSelectedClass} `} onClick={() => {
      props.onCountryListItemClick(props.country);
    }}>
      <div className={styles.code}>
        <span className={styles.label}>Code:</span> <span className={styles.value}>{props.country.code}</span>
      </div>
      <div className={styles.name}>
        <span className={styles.label}>Name:</span> <span className={styles.value}>{props.country.name}</span>
      </div>
    </div>
  );
}
