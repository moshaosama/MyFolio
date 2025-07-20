import { createContext, useContext, useState, type ReactNode } from "react";

interface dataContext {
  isOpenEditModel: boolean;
  isOpenAddModel: boolean;
  handleTriggerOpenEditModel: () => void;
  handleTriggerOpenAddModel: () => void;
}

interface OpenSkillProviderProps {
  children: ReactNode;
}

const OpenSkillContext = createContext<null | dataContext>(null);

const OpenSkillProvider = ({ children }: OpenSkillProviderProps) => {
  const [isOpenEditModel, setIsOpenEditModel] = useState(false);
  const [isOpenAddModel, setIsOpenAddModel] = useState(false);

  const handleTriggerOpenEditModel = () => {
    setIsOpenEditModel(!isOpenEditModel);
  };

  const handleTriggerOpenAddModel = () => {
    setIsOpenAddModel(!isOpenAddModel);
  };

  return (
    <OpenSkillContext
      value={{
        isOpenEditModel,
        handleTriggerOpenEditModel,
        isOpenAddModel,
        handleTriggerOpenAddModel,
      }}
    >
      {children}
    </OpenSkillContext>
  );
};

export default OpenSkillProvider;

export const useOpenSkillContext = () => {
  const context = useContext(OpenSkillContext);
  if (!context) {
    throw new Error(
      "useOpenTagsContext must be used within an TagsModelProvider"
    );
  }
  return context;
};
