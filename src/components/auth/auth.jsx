import React, { useState } from 'react';
import styles from './auth.module.css';
import BasicButton from '../ui/button/basicButton/basicButton';

const Auth = ({ setDataApi }) => {
  const [token, setToken] = useState('');
  const [idInstans, setIdinstas] = useState('');
  const onFormChange = (e) => {
    if (e.target.name === 'token') { setToken(e.target.value); } else setIdinstas(e.target.value);
  };
  const saveData = () => {
    setDataApi({ token, idInstans });
  };

  return (
        <section className={styles.main}>
            <div className={styles.form}>
                <input className={styles.field} id='id'
                 type='number'
                 placeholder='id'
                 name='idInstans'
                 onChange={onFormChange}
                 value={idInstans} />
                <input
                className={styles.field}
                id='token'
                 type='text'
                 placeholder='token'
                 name='token'
                 onChange={onFormChange}
                 value={token} />
                 <BasicButton onClick={saveData} name='Сохранить' />
            </div>
        </section>
  );
};
export default Auth;
