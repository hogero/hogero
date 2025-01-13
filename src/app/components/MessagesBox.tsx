// /components/MessageBox.tsx
import React from 'react';
import useMessage from '../hooks/useMessage';
import styles from '../styles/messageBox.module.css';

const MessageBox: React.FC = () => {
  const { messages, closeMessage } = useMessage();

  console.log("Mensajes actuales en MessageBox:", messages); // Verifica que los mensajes están llegando al componente

  return (
    <div className={styles.messageContainer}>
      {messages.length > 0 ? (
        messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${styles[msg.type]}`}
            onClick={() => closeMessage(msg.id)}
          >
            <p>{msg.message}</p>
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                closeMessage(msg.id);
              }}
            >
              ×
            </button>
          </div>
        ))
      ) : (
        <p>No hay mensajes para mostrar.</p> // Mensaje de depuración si no hay mensajes
      )}
    </div>
  );
};

export default MessageBox;
