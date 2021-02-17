import { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [entries, setEntries] = useState([]);

  return (
    <DataContext.Provider value={[entries, setEntries]}>
      {props.children}
    </DataContext.Provider>
  );
};
