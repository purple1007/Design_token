import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === "Tab1" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("Tab1")}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === "Tab2" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
          onClick={() => setActiveTab("Tab2")}
        >
          Tab 2
        </button>
      </div>
      <div>
        {activeTab === "Tab1" && <div>這是 Tab 1 的內容。</div>}
        {activeTab === "Tab2" && <div>這是 Tab 2 的內容。</div>}
      </div>
    </div>
  );
}
