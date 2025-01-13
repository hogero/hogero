// /hooks/useMessage.ts
import { useState, useCallback } from 'react';

type MessageType = 'info' | 'warning' | 'error';

interface Message {
  id: number;
  type: MessageType;
  message: string;
  autoClose: boolean;
  duration: number;
}

const useMessage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [nextId, setNextId] = useState(1);

  const showMessage = useCallback(
    (message: string, type: MessageType = 'info', autoClose: boolean = true, duration: number = 5) => {
      const id = nextId;
      setNextId(nextId + 1);

      const newMessage: Message = {
        id,
        type,
        message,
        autoClose,
        duration,
      };

      console.log("Mensaje añadido:", newMessage);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        console.log("Mensajes actualizados:", updatedMessages); // Verifica el estado después de la actualización
        return updatedMessages;
      });

      if (autoClose) {
        setTimeout(() => {
          closeMessage(id);
        }, duration * 1000);
      }
    },
    [nextId]
  );

  const closeMessage = (id: number) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.filter((message) => message.id !== id);
      console.log("Mensaje cerrado:", id);
      console.log("Mensajes restantes:", updatedMessages); // Verifica el estado después de cerrar
      return updatedMessages;
    });
  };

  return {
    messages,
    showMessage,
    closeMessage,
  };
};

export default useMessage;
