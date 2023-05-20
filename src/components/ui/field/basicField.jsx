import React from 'react';
import styles from './basicField.module.css';

export const BasicField = ({
  onChange,
  value = '',
  heading = 'заголовок',
  name = 'text',
  type = 'text',
  error = '',
  placeholder = '',
}) => {
  const onFormChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.main}>
        <label className={styles.heading} htmlFor = {name}>{heading}</label>
        <input
        className={styles.field}
         type={type}
         name={name}
         id={name}
         onChange={onFormChange}
         value={value}
         placeholder={placeholder}
          />
          <div className={styles.error}>{error}</div>
    </div>);
};
export default BasicField;
