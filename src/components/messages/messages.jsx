import React from 'react';
import styles from './messages.module.css';

const Messages = ({ messages }) => {
  const isMy = () => {
    if (messages.type === 'outgoing') {
      return `${styles.messages} ${styles.messages_my}`;
    }
    return styles.messages;
  };
  return (
        <li className={isMy()}>
            {messages.textMessage}
        </li>
  );
};
export default Messages;
