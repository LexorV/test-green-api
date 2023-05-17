import React, { useState } from 'react';
import styles from './telForm.module.css';
import BasicButton from '../ui/button/basicButton/basicButton';

const TelForm = ({ setTel }) => {
  const [telField, setTelField] = useState(null);
  const onTelfieldChange = (e) => {
    setTelField(e.target.value);
  };
  const saveData = () => {
    setTel(telField);
  };
  return (
        <div className={styles.form}>
        <input
                className={styles.field}
                id='tel'
                 type='tel'
                 placeholder='телефон'
                 name='tel'
                 onChange={onTelfieldChange}
                 value={telField} />
      <BasicButton onClick={saveData} name='Сохранить' />
      </div>

  );
};
export default TelForm;
