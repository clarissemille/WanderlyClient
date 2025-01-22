import React from "react";

const Messages = () => {
  const messages = [
    { id: 1, user: "Benoît", content: "Salut toi, tu veux toucher ma clochette ?" },
    { id: 2, user: "Yves", content: "Hey, à propos de ma tartiflette..." },
  ];

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className="p-4 bg-white rounded-lg shadow-md flex justify-between"
        >
          <div>
            <h3 className="font-bold">{message.user}</h3>
            <p className="text-gray-600">{message.content}</p>
          </div>
          <button className="text-customTeal hover:underline">
            Répondre
          </button>
        </div>
      ))}
    </div>
  );
};

export default Messages;
