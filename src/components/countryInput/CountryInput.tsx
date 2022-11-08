import React from 'react';

 import styles from './CountryInput.module.css';

export interface CountryInputProps {
  onInputChange: (inputString: string) => void;
  inputValue?: string;
}

export interface CountryInputState {
  inputValue?: string;
}

export function CountryInput(props: CountryInputProps) {
    const state: CountryInputState = Object.assign({}, {
    inputValue: props.inputValue || '',
  });
 
  return (
    <div className="CountryInput">
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Search for country"
          placeholder="Search for country"
          value={state.inputValue || ''}
          onChange={(e) => {
            console.info('e.target.value:', e.target.value);
            props.onInputChange(e.target.value);
            // dispatch(setSearchValueManually(e.target.value));
            // setCountrySearchValue(e.target.value);
          }}
        />
      </div>

    </div>
  );
}
