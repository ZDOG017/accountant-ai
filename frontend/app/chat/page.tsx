// frontend/app/chat/page.tsx
'use client'
import { useState } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[][]>([]);
  const [currentChatIndex, setCurrentChatIndex] = useState<number | null>(null);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      try {
        const response = await axios.post('http://localhost:5000/generate', { prompt: input });
        const botMessage = { role: 'assistant', content: response.data.response.trim() };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error communicating with server:', error);
      }
    }
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      setChatHistory([...chatHistory, messages]);
      setMessages([]);
    }
  };

  const handleChatClick = (index: number) => {
    setCurrentChatIndex(index);
    setMessages(chatHistory[index]);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-full md:w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-600">История чатов</h2>
        <button
          className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mb-4 hover:bg-blue-600 transition"
          onClick={handleNewChat}
        >
          <FaPlus className="mr-2" /> Новый чат
        </button>
        <div className="space-y-2">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="p-2 bg-white rounded-md shadow cursor-pointer hover:bg-gray-100 transition transform hover:scale-105"
              onClick={() => handleChatClick(index)}
            >
              <p className="text-gray-800">Чат {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-white p-4 flex flex-col">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Чат с AI Accountant</h1>
        <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 p-4 rounded-lg shadow-inner">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 p-2 rounded-md ${
                msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
              } animate-fade-in`}
            >
              <span className="text-gray-900">{msg.role === 'user' ? `User: ${msg.content}` : `Bot: ${msg.content}`}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 text-gray-900"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            onClick={handleSend}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
