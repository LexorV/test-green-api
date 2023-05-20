import React, { useState, useEffect } from 'react';
import styles from './chat.module.css';
import {
  sendText, receiveNotification, deleteNotification,
} from '../../services/greenApi';
import BasicButton from '../ui/button/basicButton/basicButton';
import Messages from '../messages/messages';

const Chat = ({ ApiData, numberTel }) => {
  const [message, setMessage] = useState('');
  const [chatMessger, setChatMessger] = useState([]);
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await receiveNotification(ApiData);
        if (res) {
          if (res.body.messageData.typeMessage === 'textMessage' || !res.body.messageData.typeMessage) {
            await setChatMessger([...chatMessger, { type: 'notMy', textMessage: res.body.messageData.textMessageData.textMessage }]);
          } else {
            await setChatMessger([...chatMessger, { type: 'notMy', textMessage: 'Не текстовый вид данных' }]);
          }
          await deleteNotification(ApiData, res.receiptId);
        }
      } catch (err) {
        console.log(err);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [chatMessger]);

  const sendMessage = async (e) => {
    e.preventDefault();
    // await console.log({ ApiData, numberTel });
    try {
      await sendText(ApiData, numberTel, message);
      setChatMessger([...chatMessger, { type: 'outgoing', textMessage: message }]);
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
        <div className={styles.chat}>
          <h3 className={styles.heading}>телефон: {`+${numberTel}`}</h3>
          <ul className={styles.chat_list}>
         {chatMessger.reverse().map((el) => (
          <Messages messages={el} key={el.timestamp} />
         ))}
          </ul>
            <form className={styles.form} onSubmit={sendMessage}>
                <textarea className={styles.field} type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <BasicButton name='отправить' disabled={message === ''} type='submit'/>
            </form>
        </div>
  );
};

export default Chat;
