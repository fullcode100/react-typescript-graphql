import React from 'react';

import styles from './CountryListItem.module.css';
import { ICountry } from '../../store/models/CountryModel';

export interface ResetProps {
    onResetButtonClick: ( ) => void;
 }

export function Reset(props: ResetProps) {
   return (
    <div className={`Reset  ${styles.CountryListItem}   `}  >
        <button onClick={() => {
          console.info('onButtonClick');
          props.onResetButtonClick();
        }}>Reset
        </button>
     </div>
  );
}
