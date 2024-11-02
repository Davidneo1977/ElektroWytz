

import React, { useState } from 'react';
//import './ChatBox.scss';

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, user: 'user' }]);
            setInput('');
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Děkuji za zprávu, odpovíme co nejdříve!', user: 'bot' },
                ]);
            }, 1000);
        }
    };

    return (
        <div className={`chat-container ${isOpen ? 'open' : ''}`}>
            <button className="chat-toggle" onClick={toggleChat}>
                {isOpen ? '✖' : '💬 Chat'}
            </button>
            {isOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <span className="chat-title">Napište mi zprávu</span>
                        <span className="chat-status">Odpovím jakmile budu online</span>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.user}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Napište zprávu..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage}>Odeslat</button>
                    </div>
                    <div className="chat-footer">
                        <span>Powered by Your Company</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBox;

