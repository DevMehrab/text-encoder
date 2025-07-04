import React from "react";

export const TextContent = () => {
  return (
    <>
      <div className="w-full mr-0 xl:mr-12 xl:w-1/2">
        <h1 className="font-bold text-2xl mb-4">Invisible Text Encoder</h1>
        <p className="mb-4">
          Convert any message into invisible Unicode characters that look like
          empty space. Perfect for hiding secrets in plain sight or sending
          invisible message.
        </p>
        <p className="bg-gray-200 p-2 rounded text-gray-800 mb-12">
          Works for English text only. Other language, emojis and some special
          characters will not work.
        </p>
      </div>
    </>
  );
};
