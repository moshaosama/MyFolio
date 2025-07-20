import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { contactService } from "../../../Api/Contact/contactService";

const useGetContact = () => {
  const { User } = useGetUser();
  const { data: Contact, refetch } = useQuery({
    queryKey: ["getContact", [User?.id]],
    queryFn: () => contactService.getContact(User?.id),
    enabled: !!User?.id,
  });

  return { refetch, Contact };
};

export default useGetContact;
