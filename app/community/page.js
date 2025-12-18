"use client";

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import GlassPanel from '@/components/GlassPanel';

export default function Community() {
    // Placeholder messages
    const [messages, setMessages] = useState([
        { user: "Admin", text: "Welcome to the community chat!" },
        { user: "Player1", text: "Hey everyone! Glad to be here." },
        { user: "Player2", text: "What's the server IP?" },
        { user: "Moderator", text: "You can find all server info on the Download page." },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        // This is a placeholder and does not send messages yet
        if (newMessage.trim()) {
            setMessages([...messages, { user: "You", text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <SectionWrapper>
            <h1 className="page-title">Community Chat</h1>
            <p className="page-sub mb-8">This is a placeholder UI. Chat is not functional yet.</p>
            
            <GlassPanel>
                <div className="h-[500px] flex flex-col">
                    {/* Message Display */}
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className="flex">
                                <span className="font-bold w-24 truncate">{msg.user}:</span>
                                <span className="ml-2 flex-1">{msg.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-600">
                        <form onSubmit={handleSendMessage} className="flex space-x-4">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </GlassPanel>
        </SectionWrapper>
    );
}
