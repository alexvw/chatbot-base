import React from 'react';
import BaseChatbot from './BaseChatbot';

const ExampleRestChatbot = () => {
  const settings = {
    general: {
      embedded: true,
      primaryColor: '#4CAF50',
      secondaryColor: '#1a1a1a'
    },
    header: {
      title: 'Chat with RESTBot',
      showAvatar: true
    },
    bot: {
      name: 'RESTBot',
      avatar: '/rest-bot-avatar.png',
      typingAnimation: true,
      typingSpeed: 30
    },
    user: {
      avatar: '/rest-user.png'
    }
  };

  const styles = {
    chatContainer: {
      backgroundColor: '#1a1a1a',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    botMessage: {
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '20px'
    },
    userMessage: {
      backgroundColor: '#424242',
      color: 'white',
      borderRadius: '20px'
    },
    input: {
      backgroundColor: '#333',
      color: 'white',
      border: '1px solid #555'
    },
    header: {
      backgroundColor: '#2C2C2C',
      color: 'white'
    },
    sendButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    }
  };

  const config = {
    apiEndpoint: 'https://api.example.com/v1/chat',
    additionalParams: {
      userId: 'rest-user',
      apiKey: 'your-api-key',
      format: 'json',
      service: 'rest-chat'
    },
    maxHistoryLength: 500,
    initialMessage: 'Welcome to REST Chat! I can help you with API-related questions.',
    settings,
    styles,
    alias: 'RESTBot'
  };

  return <BaseChatbot {...config} />;
};

export default ExampleRestChatbot; 