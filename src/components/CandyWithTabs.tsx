import { useState } from "react";
import FeaturedDropdown from "./component/featuredDropdown";
import FormatsDropdown from "./component/formatsDropdown";
import SoonDropdown from "./component/soonDropdown";
import MenusDropdown from "./component/menusDropdown";

interface TabContent {
  title: string;
  content: React.ReactNode;
}

const CandyDropdown: React.FC = () => {
  const tabs: TabContent[] = [
    {
      title: "Menus",
      content: <MenusDropdown />,
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

export default CandyDropdown;
