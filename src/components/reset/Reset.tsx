import React from 'react';

import styles from './Reset.module.css';
import { ICountry } from '../../store/models/CountryModel';

export interface ResetProps {
    onResetButtonClick: ( ) => void;
 }

export function Reset(props: ResetProps) {
   return (
    <div className={`resetContainer  ${styles.Reset}   `}  >
        <button onClick={() => {
          console.info('onButtonClick');
          props.onResetButtonClick();
        }} className={styles.button}>Reset
        </button>
     </div>
  );
}
