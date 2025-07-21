import { createContext, useContext, useState, type ReactNode } from "react";

interface dataContext {
  isOpenAddExperience: boolean;
  handleTriggerOpenAddExperience: () => void;
}

interface OpenAddExperienceProviderProps {
  children: ReactNode;
}

const OpenAddExperienceContext = createContext<dataContext | null>(null);

const OpenAddExperienceProvider = ({
  children,
}: OpenAddExperienceProviderProps) => {
  const [isOpenAddExperience, setIsOpenAddExperience] = useState(false);

  const handleTriggerOpenAddExperience = () => {
    setIsOpenAddExperience(!isOpenAddExperience);
  };

  return (
    <OpenAddExperienceContext
      value={{ isOpenAddExperience, handleTriggerOpenAddExperience }}
    >
      {children}
    </OpenAddExperienceContext>
  );
};

export default OpenAddExperienceProvider;

export const useOpenExperienceContext = () => {
  const context = useContext(OpenAddExperienceContext);
  if (!context) {
    throw new Error(
      "useOpenTagsContext must be used within an TagsModelProvider"
    );
  }
  return context;
};
