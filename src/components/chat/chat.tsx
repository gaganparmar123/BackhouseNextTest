"use client";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Chat = () => {
  const [messages, setMessages] = useState<any>(["Hey! what can i help you ?"]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full mt-5 bg-white border-gray-300 rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg: string, index: number) => (
          <div key={index} className="mb-2">
            <div className="inline-block px-4 py-2 bg-primary-10 rounded-lg">
              {msg}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-4 py-2 mr-2 border rounded-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
        />
        <button
          className="p-2 bg-primary-10 rounded-full focus:outline-none"
          onClick={handleSendMessage}
        >
          <AiOutlineSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
