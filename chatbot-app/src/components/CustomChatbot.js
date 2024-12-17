import React from 'react';
import BaseChatbot from './BaseChatbot';

const CustomChatbot = () => {
  const settings = {
    general: {
      embedded: true,
      primaryColor: '#19C37D',
      secondaryColor: '#ffffff'
    },
    header: {
      title: 'CustomBot',
      showAvatar: true
    },
    bot: {
      avatar: '/custom-avatar.png',
      typingAnimation: true,
      typingSpeed: 50
    },
    user: {
      avatar: '/custom-user.png'
    }
  };

  const styles = {
    chatContainer: {
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    botMessage: {
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '15px'
    },
    userMessage: {
      backgroundColor: '#e9ecef',
      color: '#333',
      borderRadius: '15px'
    }
  };

  const config = {
    apiEndpoint: 'https://your-custom-endpoint.com/chat',
    additionalParams: {
      userId: '12345',
      modelName: 'gpt-4',
      temperature: 0.7
    },
    maxHistoryLength: 2000,
    initialMessage: 'Hi! I am CustomBot. How can I help you?',
    settings,
    styles,
    alias: 'CustomBot'
  };

  return <BaseChatbot {...config} />;
};

export default CustomChatbot; 