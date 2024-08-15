import { useState } from "react";
import FeaturedDropdown from "./component/featuredDropdown";
import SoonDropdown from "./component/soonDropdown";
import FormatsDropdown from "./component/formatsDropdown";

interface TabContent {
  title: string;
  content: React.ReactNode;
}

const DropdownWithTabs: React.FC = () => {
  const tabs: TabContent[] = [
    {
      title: "Destacadas",
      content: <FeaturedDropdown />,
    },
    {
      title: "Próximamente",
      content: <SoonDropdown />,
    },
    {
      title: "Formatos",
      content: <FormatsDropdown />,
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

export default DropdownWithTabs;
