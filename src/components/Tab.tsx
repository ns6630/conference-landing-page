import React, { useContext } from "react";
import { TabProps, TabsContext } from "./Tabs";
import "./Tab.css";


const Tab: React.FC<TabProps> = ({index, title, children}) => {
  const context = useContext(TabsContext);

  return (
    <div
      className={context.selectedTab === index ? "tab-name tab-name__active" : "tab-name"} 
      onClick={(event) => context.onClick(index)}
    >
      {title}
    </div>
  );
}

export default Tab;