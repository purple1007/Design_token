import React from "react";
import paletteTokens from "../data/palette.json";

const PaltteToken = ({ token, group }) => (
  <div className="flex flex-wrap py-6">
    {token.map((token, index) => (
      <div key={index} className="w-32 mr-6 mb-6 bg-zinc-800 rounded">
        <div
          className="w-full h-8 rounded mb-1 border border-zinc-600"
          style={{ backgroundColor: token.value }}
        ></div>
        <p className="text-gray-300 text-sm mb-1">
          {group} / {token.name}
        </p>
        <p className="text-gray-400 text-xs">{token.value}</p>
      </div>
    ))}
  </div>
);

const PaltteTokens = () => (
  <div className="px-2 py-8">
    {paletteTokens.tokens.map((token, index) => (
      <div key={index} token={token}>
        <div className="sticky top-12 py-2 border-b border-zinc-600 bg-zinc-800">
          <p>{token.group}</p>
        </div>
        <PaltteToken token={token.list} group={token.group} />
      </div>
    ))}
  </div>
);

export default PaltteTokens;
