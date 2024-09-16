import React, { useState } from 'react';
import { Send, Plus, MoreVertical } from 'lucide-react';
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface ChatMessage {
     text: string;
     sender: 'user' | 'ai';
}

interface ChatData {
     [chatName: string]: ChatMessage[];
}



const ChatUI = () => {
     const [chatData, setChatData] = useState<ChatData>({
          'Chat 1': [],
          'Chat 2': [],
     });
     const [inputMessage, setInputMessage] = useState('');
     const [activeChat, setActiveChat] = useState('Chat 1');

     const handleSendMessage = () => {
          if (inputMessage.trim() !== '') {
               setChatData(prevData => ({
                    ...prevData,
                    [activeChat]: [...prevData[activeChat], { text: inputMessage, sender: 'user' }]
               }));
               setInputMessage('');
          }
     };

     const handleNewChat = () => {
          const newChatName = `Chat ${Object.keys(chatData).length + 1}`;
          setChatData(prevData => ({
               ...prevData,
               [newChatName]: []
          }));
          setActiveChat(newChatName);
     };

     // For AceternityUI placeholder-and-vanish START
     const placeholders = [
          "What's the first rule of Fight Club?",
          "Who is Tyler Durden?",
          "Where is Andrew Laeddis Hiding?",
          "Write a Javascript method to reverse a string",
          "How to assemble your own PC?",
     ];

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
     };
     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log("submitted");
     };
     // For AceternityUI placeholder-and-vanish END

     return (
          <div className="flex h-screen bg-[#0f1117] text-white">
               {/* Sidebar */}
               <div className="w-64 bg-[#161922] flex flex-col">
                    <div className="p-3 border-b border-gray-700">
                         <h2 className="text-xl font-semibold">Chats</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                         {Object.keys(chatData).map((chat) => (
                              <div
                                   key={chat}
                                   className={`p-3 flex justify-between items-center cursor-pointer hover:bg-[#1e2230] ${activeChat === chat ? 'bg-[#1e2230]' : ''
                                        }`}
                                   onClick={() => setActiveChat(chat)}
                              >
                                   <span>{chat}</span>
                                   <button className="text-gray-400 hover:text-white">
                                        <MoreVertical size={16} />
                                   </button>
                              </div>
                         ))}
                    </div>
                    <div className="p-4 border-gray-700">
                         <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-blue-950 w-full py-3" onClick={handleNewChat}>
                              New Chat
                         </button>
                    </div>
               </div>

               {/* Main chat area */}
               <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="bg-[#161922] px-4 py-3 flex items-center justify-between border-b border-gray-700">
                         <h1 className="text-lg font-semibold">Chat UI</h1>
                         <h2 className="text-lg">{activeChat}</h2>
                    </div>

                    {/* Chat messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                         {chatData[activeChat].map((message, index) => (
                              <div
                                   key={index}
                                   className={`${message.sender === 'user' ? 'ml-auto bg-blue-500' : 'mr-auto bg-[#161922]'
                                        } rounded-lg p-3 max-w-xs`}
                              >
                                   <p>{message.text}</p>
                              </div>
                         ))}
                    </div>

                    {/* Input area */}
                    <div className="bg-[#161922] p-4">
                         <div className="flex items-center bg-[#0f1117] rounded-lg">
                              <input
                                   type="text"
                                   placeholder="Type a message..."
                                   className="flex-1 bg-transparent p-3 focus:outline-none"
                                   value={inputMessage}
                                   onChange={(e) => setInputMessage(e.target.value)}
                                   onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
                              />
                              <button
                                   className="p-3 text-blue-500 hover:text-blue-600"
                                   onClick={handleSendMessage}
                              >
                                   <Send size={20} />
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ChatUI;