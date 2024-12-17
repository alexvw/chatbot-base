// src/App.js
import React from 'react';
import MyChatBot from './components/MyChatBot';
import './App.css';
import './style/styles.css';

function App() {
  const apiEndpoint = 'https://removed-website.com/chat';
  const additionalParams = { userId: '12345' };
  const maxHistoryLength = 1000; // Adjust as needed

  return (
    <div className="App">
      <main>
        <MyChatBot
          apiEndpoint={apiEndpoint}
          additionalParams={additionalParams}
          maxHistoryLength={maxHistoryLength}
        />
      </main>
    </div>
  );
}

export default App;
