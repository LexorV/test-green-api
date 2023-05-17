import React from 'react';
import styles from './basicButton.module.css';

const BasicButton = ({ onClick, name }) => (
        <button onClick={onClick}
                className={styles.button}>{name}</button>
);
export default BasicButton;
