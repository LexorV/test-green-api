import React, { useState } from 'react';
import styles from './app.module.css';
import Auth from '../auth/auth';
import TellForm from '../TelForm/telForm';
import Chat from '../chat/chat';

function App() {
  const [indefectionData, setIndefectionData] = useState(null);
  const [tel, setTel] = useState(null);
  console.log(indefectionData);
  return (
    <main className={styles.main}>
    {!tel && (<TellForm setTel={setTel} apiData={indefectionData} />)}
    {!indefectionData && (<Auth setDataApi={setIndefectionData} />)}
    {tel && indefectionData && (<Chat ApiData = {indefectionData} numberTel = {tel} />)}
    </main>
  );
}

export default App;
