// src/components/MyChatBot.js
import React, { useState } from 'react';
import ChatBot from 'react-chatbotify';
import settings from '../style/settings.json';
import styles from '../style/styles.json';

const MyChatBot = ({ apiEndpoint, additionalParams, maxHistoryLength }) => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessage = async (userMessage) => {
    const updatedHistory = [...chatHistory, { type: 'user', content: userMessage }];
    const historyText = updatedHistory
      .map(entry => `${entry.type === 'user' ? 'User' : 'Bot'}: ${entry.content}`)
      .join('\n')
      .slice(-maxHistoryLength);

    const payload = {
      query: userMessage,
      history: historyText,
      ...additionalParams,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const botMessage = data.reply;

      setChatHistory([...updatedHistory, { type: 'bot', content: botMessage }]);
    } catch (error) {
      console.error('Error communicating with the API:', error);
    }
  };

  const flow = {
    start: {
      message: 'Hello! How can I assist you today?',
      path: 'user_input',
    },
    user_input: {
      user: true,
      function: ({ userInput }) => handleUserMessage(userInput),
      path: 'user_input',
    },
  };

  return (
    <ChatBot
      settings={settings}
      styles={styles}
      flow={flow}
    />
  );
};

export default MyChatBot;
