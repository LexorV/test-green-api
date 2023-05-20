import React, { useState } from 'react';
import styles from './telForm.module.css';
import BasicButton from '../ui/button/basicButton/basicButton';
import { BasicField } from '../ui/field/basicField';
import { checkWhatsapp } from '../../services/greenApi';
import { validationTel, exceptionPlus } from '../../services/validation';

const TelForm = ({ setTel, apiData }) => {
  const [telField, setTelField] = useState(null);
  const [error, setError] = useState('');
  const saveData = async (e) => {
    e.preventDefault();
    const field = validationTel(telField, 10);
    setError(field.ErrorText);
    if (!field.isError) {
      try {
        const teFilt = exceptionPlus(telField);
        const res = await checkWhatsapp(apiData, teFilt);
        if (res.existsWhatsapp) {
          setTel(teFilt);
        }
      } catch (err) {
        setError('Неправильный номер телефона или телефон не привязан к Whatsapp');
        console.log(err.message);
      }
    }
  };
  return (
        <form className={styles.form} onSubmit={saveData}>
           <BasicField
                 onChange={setTelField}
                 value={telField}
                 heading='Ваш id в green-API'
                 name='tel'
                 type='number'
                 error = {error}
                 placeholder='телефон'
                 />
      <BasicButton onClick={saveData} name='Сохранить' />
      </form>

  );
};
export default TelForm;
