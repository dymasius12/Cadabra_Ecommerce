import React, { useState } from 'react';
import axios from 'axios';
import './css/ChatComponent.css';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatId, setChatId] = useState(null);

    const fetchMessages = async (chatId) => {
        const { data } = await axios.get(`/path/to/api/retrieve_messages/${chatId}/`);
        setMessages(data);
    }

    const startChat = async () => {
        try {
            const { data } = await axios.post('/api/chat/start_chat/');
            setChatId(data.chat_id); // Assuming the response has a chat_id field.
        } catch (error) {
            console.error("Error starting chat:", error);
        }
    }

    const handleSendMessageDB = async (chatId) => {
        if (input.trim()) {
            const { data } = await axios.post(`/api/chat/send_message/${chatId}/`, { content: input });
            setMessages([...messages, data]);
            setInput('');
        }
    }

    const handleSendMessage = (chatId) => {
        if (input.trim()) {
            // Mock sending a message by appending it to the messages array
            const mockSentMessage = {
                id: Date.now(), // Using timestamp as a mock ID
                content: input
            };
            setMessages([...messages, mockSentMessage]);
            setInput('');
        }
    }


    const toggleChat = () => {
        if (!isChatOpen && !chatId) {
            startChat();
        }
        setIsChatOpen(!isChatOpen);
    }

    return (
        <div className="chat-container">
            <button className="chat-toggle" onClick={() => toggleChat()}>Chat</button>
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
                        <button onClick={() => handleSendMessage(chatId)}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );

}


export default ChatComponent