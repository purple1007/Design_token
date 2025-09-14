import React, { useState } from "react";
import paletteTokens from "../data/palette.json";

const PaletteToken = ({ token, group }) => {
  const [copiedValue, setCopiedValue] = useState(null);

  const copyToClipboard = async (value, tokenIndex) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(tokenIndex);
      setTimeout(() => setCopiedValue(null), 2000);
    } catch (err) {
      console.error('複製失敗:', err);
    }
  };

  return (
    <div className="flex flex-wrap py-6">
      {token.map((token, index) => (
        <div 
          key={index} 
          className="w-32 mr-6 mb-6 bg-zinc-800 rounded relative group cursor-pointer hover:bg-zinc-700 transition-colors duration-200 p-2"
          onClick={() => copyToClipboard(token.value, index)}
        >
          <div
            className="w-full h-8 rounded mb-1 border border-zinc-600"
            style={{ backgroundColor: token.value }}
          ></div>
          <p className="text-gray-300 text-sm mb-1">
            {group} / {token.name}
          </p>
          <p className="text-gray-400 text-xs">{token.value}</p>
          
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            {copiedValue === index ? 'Copied!' : 'Copy color code'}
          </div>
        </div>
      ))}
    </div>
  );
};

const PaletteTokens = () => (
  <div className="px-2 py-8">
    {paletteTokens.tokens.map((token, index) => (
      <div key={index} token={token}>
        <div className="sticky top-[50px] py-2 border-b border-zinc-600 bg-zinc-800 z-50">
          <p>{token.group}</p>
        </div>
        <PaletteToken token={token.list} group={token.group} />
      </div>
    ))}
  </div>
);

export default PaletteTokens;
