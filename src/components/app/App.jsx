import React, { useState } from 'react';
import styles from './app.module.css';
import Auth from '../auth/auth';
import TellForm from '../TelForm/telForm';

function App() {
  const [indefectionData, setIndefectionData] = useState(null);
  const [tel, setTel] = useState(null);

  return (
    <main className={styles.main}>
    {!tel && (<TellForm setTel={setTel} />)}
    {!indefectionData && (<Auth setDataApi={setIndefectionData} />)}
    </main>
  );
}

export default App;
