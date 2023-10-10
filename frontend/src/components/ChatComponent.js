import React, { useState } from 'react';
import axios from 'axios';
import './css/ChatComponent.css';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    const fetchMessages = async (chatId) => {
        const { data } = await axios.get(`/path/to/api/retrieve_messages/${chatId}/`);
        setMessages(data);
    }

    const handleSendMessage = async (chatId) => {
        if (input.trim()) {
            const { data } = await axios.post(`/path/to/api/send_message/${chatId}/`, { content: input });
            setMessages([...messages, data]);
            setInput('');
        }
    }

    return (
        <div className="chat-container">
            <button className="chat-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>Chat</button>
            {isChatOpen && (
                <div className="chat-popup">
                    <div className="chat-header">
                        <span>Live Chat</span>
                        <button onClick={() => setIsChatOpen(false)}>X</button>
                    </div>
                    <div className="chat-body">
                        {messages.map(msg => <div key={msg.id} className="chat-message">{msg.content}</div>)}
                    </div>
                    <div className="chat-input">
                        <input value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={() => handleSendMessage(1)}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatComponent