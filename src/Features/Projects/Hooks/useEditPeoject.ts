import { useState } from "react";

const useEditPeoject = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleTriggerOpenEdit = () => {
    setIsOpenEdit(true);
  };

  const handleCloseOpenEdit = () => {
    setIsOpenEdit(false);
  };

  return { isOpenEdit, handleTriggerOpenEdit, handleCloseOpenEdit };
};

export default useEditPeoject;
