import React from 'react';
import styles from './basicButton.module.css';

const BasicButton = ({
  onClick, name, type = 'button', disabled = false,
}) => (
        <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={styles.button}>
         {name}
        </button>
);
export default BasicButton;
