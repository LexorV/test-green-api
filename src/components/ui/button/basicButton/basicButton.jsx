import React from 'react';
import styles from './basicButton.module.css';

const BasicButton = ({ onClick, name, type = 'button' }) => (
        <button type={type} onClick={onClick}
                className={styles.button}>{name}</button>
);
export default BasicButton;
