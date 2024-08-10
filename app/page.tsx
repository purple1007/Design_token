"use client"; // Client Component

import { useState } from "react";
import ColorToken from "../app/pages/ColorTokens";
import PaltteTokens from "../app/pages/Palette";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Tab1");
  return (
    <main className="flex flex-col items-center justify-between p-8 max-w-screen-lg m-auto">
      <div className="w-full bg-zinc-800 rounded-md shadow px-4">
        <div className="fixed w-full left-0 top-0 z-50">
          <div className="max-w-[960px] flex justify-center m-auto pt-2 bg-zinc-800 border-b border-zinc-600">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "Tab1"
                  ? "text-zinx-100 border-b border-zinc-100"
                  : "text-zinc-500"
              }`}
              onClick={() => setActiveTab("Tab1")}
            >
              Color token
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "Tab2"
                  ? "text-zinc-100 border-b border-zinc-100"
                  : "text-zinc-500"
              }`}
              onClick={() => setActiveTab("Tab2")}
            >
              Palette
            </button>
          </div>
        </div>
        <div>
          {activeTab === "Tab1" && <ColorToken />}
          {activeTab === "Tab2" && <PaltteTokens />}
        </div>
      </div>
    </main>
  );
}
