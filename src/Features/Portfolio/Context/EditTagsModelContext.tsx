import { createContext, useContext, useState, type ReactNode } from "react";

interface dataContext {
  isOpenEditTags: boolean;
  isOpenEditGithub: boolean;
  isOpenEditLinkedin: boolean;
  isOpenEditTwitter: boolean;
  isOpenEditMedium: boolean;
  TriggerOpenEditGithub: () => void;
  TriggerOpenEditLinkedin: () => void;
  TriggerOpenEditTwitter: () => void;
  TriggerOpenEditMedium: () => void;
  isOpenEditResume: boolean;
  TriggerOpenEditTags: () => void;
  TriggerOpenEditResume: () => void;
}

interface EditTagsModelProviderProps {
  children: ReactNode;
}

const EditTagsModelContext = createContext<null | dataContext>(null);

const EditTagsModelProvider = ({ children }: EditTagsModelProviderProps) => {
  const [isOpenEditTags, setIsOpenEditTags] = useState(false);
  const [isOpenEditResume, setIsOpenEditResume] = useState(false);

  const [isOpenEditGithub, setIsOpenEditGithub] = useState(false);
  const [isOpenEditLinkedin, setIsOpenEditLinkedin] = useState(false);
  const [isOpenEditTwitter, setIsOpenEditTwitter] = useState(false);
  const [isOpenEditMedium, setIsOpenEditMedium] = useState(false);

  const TriggerOpenEditTags = () => {
    setIsOpenEditTags(!isOpenEditTags);
  };

  const TriggerOpenEditResume = () => {
    setIsOpenEditResume(!isOpenEditResume);
  };

  const TriggerOpenEditGithub = () => {
    setIsOpenEditGithub(!isOpenEditGithub);
  };
  const TriggerOpenEditLinkedin = () => {
    setIsOpenEditLinkedin(!isOpenEditLinkedin);
  };
  const TriggerOpenEditTwitter = () => {
    setIsOpenEditTwitter(!isOpenEditTwitter);
  };
  const TriggerOpenEditMedium = () => {
    setIsOpenEditMedium(!isOpenEditMedium);
  };

  return (
    <EditTagsModelContext
      value={{
        isOpenEditTags,
        TriggerOpenEditTags,
        isOpenEditResume,
        TriggerOpenEditResume,
        isOpenEditGithub,
        isOpenEditLinkedin,
        isOpenEditTwitter,
        isOpenEditMedium,
        TriggerOpenEditGithub,
        TriggerOpenEditLinkedin,
        TriggerOpenEditTwitter,
        TriggerOpenEditMedium,
      }}
    >
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
