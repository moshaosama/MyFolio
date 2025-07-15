import { createContext, useContext, useState, type ReactNode } from "react";

interface dataContext {
  isOpen: boolean;
  triggerOpenPopUp: () => void;
}

interface OpenPopUpTemplateProviderProps {
  children: ReactNode;
}

const OpenPopUpTemplateContext = createContext<null | dataContext>(null);

const OpenPopUpTemplateProvider = ({
  children,
}: OpenPopUpTemplateProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerOpenPopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OpenPopUpTemplateContext value={{ isOpen, triggerOpenPopUp }}>
      {children}
    </OpenPopUpTemplateContext>
  );
};

export default OpenPopUpTemplateProvider;

export const useOpenPopUpTemplateContext = () => {
  const context = useContext(OpenPopUpTemplateContext);
  if (!context) {
    throw new Error(
      "useOpenPopUpTemplateContext must be used within an OpenPopUpTemplateProvider"
    );
  }
  return context;
};
