import React, { useState } from "react";
import "./Tabs.css";

export interface TabProps {
  index: number;
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({children}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedTabElement = React.Children.toArray(children)[selectedTab] as React.ReactElement<TabProps>;
  const content = selectedTabElement?.props?.children;

  return (
    <div className="tabs">
      <TabsContext.Provider value={{selectedTab: selectedTab, onClick: setSelectedTab}}>
        <div className="tab-names">{children}</div>
      </TabsContext.Provider>
      <div className="tab-content">{content}</div>
    </div>
  );
}

interface TabsContextProps {
  selectedTab: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}

export const TabsContext = React.createContext<TabsContextProps>({selectedTab: 0, onClick: () => {}});

export default Tabs;