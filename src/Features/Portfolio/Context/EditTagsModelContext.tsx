import { createContext, useContext, useState, type ReactNode } from "react";

interface dataContext {
  isOpenEditTags: boolean;
  TriggerOpenEditTags: () => void;
}

interface EditTagsModelProviderProps {
  children: ReactNode;
}

const EditTagsModelContext = createContext<null | dataContext>(null);

const EditTagsModelProvider = ({ children }: EditTagsModelProviderProps) => {
  const [isOpenEditTags, setIsOpenEditTags] = useState(false);

  const TriggerOpenEditTags = () => {
    setIsOpenEditTags(!isOpenEditTags);
  };

  return (
    <EditTagsModelContext value={{ isOpenEditTags, TriggerOpenEditTags }}>
      {children}
    </EditTagsModelContext>
  );
};

export default EditTagsModelProvider;

export const useOpenEditTagsContext = () => {
  const context = useContext(EditTagsModelContext);
  if (!context) {
    throw new Error(
      "useOpenEditTagsContext must be used within an EditTagsModelProvider"
    );
  }
  return context;
};
