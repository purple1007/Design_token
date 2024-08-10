import React from "react";
import colorTokens from "../data/colorTokens.json";

const ColorToken = ({ token }) => (
  <div className="w-full bg-zinc-800 py-8 px-4 md:p-4 rounded-lg my-1 flex flex-col md:flex-row">
    <div className="w-full mr-2 mb-4 md:mb-0">
      <h3 className="text-white font-bold mb-1 md:mb-3">{token.name}</h3>
      <div className="inline-block bg-zinc-700 px-3 mb-4 mt-2 md:mt-0 rounded-full">
        <code className="text-gray-300 text-xs">{token.CSS}</code>
      </div>
      <p className="text-gray-400 text-sm">{token.description}</p>
    </div>
    <div className="flex w-full md:w-30">
      <div className="w-full mr-2 p-2 bg-zinc-50 rounded">
        <div
          className="w-full h-8 rounded mb-3 border border-zinc-300"
          style={{ backgroundColor: token.lightValue.value }}
        ></div>
        <p className="text-gray-700 text-sm mb-1">{token.lightValue.name}</p>
        <p className="text-gray-400 text-xs">{token.lightValue.value}</p>
      </div>
      <div className="w-full p-2 border border-zinc-700 rounded">
        <div
          className="w-full h-8 rounded border border-zinc-700 mb-3"
          style={{ backgroundColor: token.darkValue.value }}
        ></div>
        <p className="text-white text-sm mb-1">{token.darkValue.name}</p>
        <p className="text-gray-400 text-xs">{token.darkValue.value}</p>
      </div>
    </div>
  </div>
);

const ColorTokens = () => (
  <div className="min-h-screen">
    <div
      className="sticky top-12 p-2 px-4 mb-2 pt-4 bg-zinc-800 w-full flex shadow-lg flex-col md:flex-row"
      style={{ justifyContent: "space-between" }}
    >
      <p className="font-bold w-full mr-2">Color name</p>
      <div
        className="flex w-full text-zinc-400 pr-3 pt-2 md:pt-0"
        style={{ justifyContent: "space-between" }}
      >
        <p className="w-full mr-4">White value</p>
        <p className="w-full ">Dark value</p>
      </div>
    </div>
    <div className="flex flex-wrap py-4">
      {colorTokens.tokens.map((token, index) => (
        <ColorToken key={index} token={token} />
      ))}
    </div>
  </div>
);

export default ColorTokens;
