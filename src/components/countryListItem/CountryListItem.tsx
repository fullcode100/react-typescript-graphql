import React from 'react';

import styles from './CountryListItem.module.css';
import { Country } from '../../store/models/CountryModel';

export interface CountryListItemProps  {
  country: Country;
}

export function CountryListItem(props: CountryListItemProps) {

  return (
    <div className={styles.CountryListItem}>
      <div  className={styles.code}><span className={styles.label}>Code:</span> <span className={styles.value}>{props.country.code}</span></div>
      <div className={styles.name}><span className={styles.label}>Name:</span> <span className={styles.value}>{props.country.name}</span></div>
    </div>
  );
}
