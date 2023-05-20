import React, { useState } from 'react';
import styles from './auth.module.css';
import BasicButton from '../ui/button/basicButton/basicButton';
import { getStateInstance } from '../../services/greenApi';
import { BasicField } from '../ui/field/basicField';
import validation from '../../services/validation';

const Auth = ({ setDataApi }) => {
  const [token, setToken] = useState('');
  const [idInstans, setIdinstas] = useState('');
  const [globalError, setGlobalError] = useState('');
  const [tokenError, setTokenError] = useState('');
  const [idInstansError, setIdInstans] = useState('');
  const saveData = async (e) => {
    e.preventDefault();
    const field1 = validation(idInstans, 10);
    const field2 = validation(token, 50);
    setIdInstans(field1.ErrorText);
    setTokenError(field2.ErrorText);
    if (!field1.isError && !field2.isError) {
      try {
        const res = await getStateInstance({ token, idInstans });
        if (res) {
          setDataApi({ token, idInstans });
        }
      } catch (err) {
        setGlobalError('Неправильный токен или id');
        console.log(err.message);
      }
    }
  };

  return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={saveData}>
            <BasicField
                 onChange={setIdinstas}
                 value={idInstans}
                 heading='Ваш id в green-API'
                 name='idInstans'
                 type='number'
                 error = {idInstansError}
                 placeholder='id'
                 />
                 <BasicField
                 onChange={setToken}
                 value={token}
                 heading='токен'
                 name='токен'
                 type='текст'
                 error = {tokenError}
                 placeholder='token'
                 />
                 <BasicButton type='submit' name='Сохранить' />
                 <div>{globalError}</div>
            </form>
        </section>
  );
};
export default Auth;
