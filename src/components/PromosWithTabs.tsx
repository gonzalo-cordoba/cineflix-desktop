import { useState } from "react";

import PromosDropdown from "./component/promosDropdown";

interface TabContent {
  title: string;
  content: React.ReactNode;
}

const PromosWithTabs: React.FC = () => {
  const tabs: TabContent[] = [
    {
      title: "Promociones",
      content: <PromosDropdown />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="p-4 font-extrabold"
      style={{ backgroundColor: "#240046", color: "white" }}
    >
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 transition-colors ${
              activeTab === index
                ? "border-b-2 border-purple-600 text-purple-600"
                : "text-gray-600"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default PromosWithTabs;
