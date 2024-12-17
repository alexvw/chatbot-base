// src/components/BaseChatbot.js
import React, { useState } from 'react';
import ChatBot from 'react-chatbotify';

const BaseChatbot = ({ 
  apiEndpoint = 'https://removed-website.com/chat',
  additionalParams = { userId: '12345' },
  maxHistoryLength = 1000,
  initialMessage = 'Hello! How can I assist you today?',
  alias = 'Bot'
}) => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessage = async (userMessage) => {
    const updatedHistory = [...chatHistory, { type: 'user', content: userMessage }];
    const historyText = updatedHistory
      .map(entry => `${entry.type === 'user' ? 'User' : alias}: ${entry.content}`)
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
      message: initialMessage,
      path: 'user_input',
    },
    user_input: {
      user: true,
      function: ({ userInput }) => handleUserMessage(userInput),
      path: 'user_input',
    },
  };

  const settings = {
      "general": {
        "primaryColor": "#343541",
        "secondaryColor": "#19C37D",
        "showFooter": true,
        "showHeader": true
      },
      "header": {
        "showAvatar": true,
        "title": "Chat with BaseChatbot"
      },
      "botBubble": {
        "simStream": true
      }
    };

  const styles = {
    "chatWindowStyle": {
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 10px 0px rgba(0,0,0,0.5)"
    },
    "headerStyle": {
      "backgroundImage": "linear-gradient(to right, #40414F, #343541)",
      "borderRadius": 10
    },
    "chatInputContainerStyle": {
      "backgroundColor": "#2C2D35"
    },
    "footerStyle": {
      "backgroundColor": "#40414F"
    },
    "userBubbleStyle": {
      "color": "#FFFFFF",
      "backgroundColor": "#444654",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "botBubbleStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "botOptionStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "botOptionHoveredStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#444654",
      "borderRadius": 10,
      "border": "2px solid #19C37D",
      "marginTop": 1,
      "marginLeft": 1,
      "boxShadow": "inset 3px 3px 5px 3px rgba(0,0,0,0.1)"
    },
    "botCheckboxRowStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "botCheckboxNextStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "botCheckMarkSelectedStyle": {
      "color": "#19C37D",
      "backgroundColor": "#40414F"
    },
    "chatHistoryButtonStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "chatHistoryButtonHoveredStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#444654",
      "borderRadius": 10,
      "borderColor": "#19C37D",
      "border": "2px solid",
      "marginTop": 1,
      "marginLeft": 1,
      "boxShadow": "inset 3px 3px 5px 3px rgba(0,0,0,0.1)"
    },
    "chatHistoryLineBreakStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"
    },
    "loadingSpinnerStyle": {
      "borderTop": "4px solid #19C37D"
    },
    "chatInputAreaStyle": {
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #5D5F67"
    },
    "chatInputAreaFocusedStyle": {
      "border": "2px solid #19C37D",
      "boxShadow": "0px 0px 5px 0px rgba(0,255,0,0.2)"
    },
    "sendButtonStyle": {
      "color": "#EAEAEA",
      "backgroundColor": "#343541",
      "borderRadius": 10,
      "border": "2px solid #19C37D",
      "boxShadow": "0px 0px 5px 0px rgba(0,255,0,0.2)"
    },
    "sendButtonHoveredStyle": {
      "color": "#FFFFFF",
      "backgroundColor": "#19C37D",
      "borderRadius": 10,
      "border": "2px solid #5D5F67",
      "boxShadow": "inset 3px 3px 5px 3px rgba(0,0,0,0.1)"
    },
    "chatButtonStyle": {
      "borderRadius": 10
    },
    "toolTipStyle": {
      "borderRadius": 10
    }
  }
  ;

  return (
    <ChatBot
      settings={settings}
      styles={styles}
      flow={flow}
    />
  );
};

export default BaseChatbot;
