import { useEffect, useState } from "react";

const useOpenEditContact = () => {
  const [isOpenEditContact, setIsOpenEditContact] = useState<unknown | null>(
    null
  );

  const handleOpenEdit = (id: string) => {
    setIsOpenEditContact(id as string);
  };

  const handleCloseEdit = () => {
    setIsOpenEditContact(null);
  };

  useEffect(() => {
    console.log(isOpenEditContact);
  }, [isOpenEditContact]);
  return { handleOpenEdit, isOpenEditContact, handleCloseEdit };
};

export default useOpenEditContact;
