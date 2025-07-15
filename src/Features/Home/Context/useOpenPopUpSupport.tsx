import { createContext, useContext, useState, type ReactNode } from "react";

interface DataContext {
  isOpen: boolean;
  triggerOpenPopUp: () => void;
}

interface OpenPopUpSupportProviderProps {
  children: ReactNode;
}

const OpenPopUpSupportContext = createContext<null | DataContext>(null);

const OpenPopUpSupportProvider = ({
  children,
}: OpenPopUpSupportProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerOpenPopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OpenPopUpSupportContext.Provider value={{ isOpen, triggerOpenPopUp }}>
      {children}
    </OpenPopUpSupportContext.Provider>
  );
};

export default OpenPopUpSupportProvider;

export const useOpenPopUpSupportContext = () => {
  const context = useContext(OpenPopUpSupportContext);
  if (!context) {
    throw new Error(
      "useOpenPopUpSupportContext must be used within an OpenPopUpSupportProvider"
    );
  }
  return context;
};
