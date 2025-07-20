import { useMutation } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { contactService } from "../../../Api/Contact/contactService";
import useGetContact from "./useGetContact";
import useOpenEditContact from "./useOpenEditContact";

const useEditContact = () => {
  const { User } = useGetUser();
  const { refetch } = useGetContact();
  const { handleCloseEdit } = useOpenEditContact();

  const { mutate } = useMutation({
    mutationKey: ["editContact"],
    mutationFn: contactService.EditContact,
    onSuccess: () => {
      refetch();
      handleCloseEdit();
    },
  });

  const handleClick = (data: any) => {
    mutate({
      ...data,
      user_id: User?.id,
    });
  };

  return { handleClick };
};

export default useEditContact;
