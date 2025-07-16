import { useMutation, useQuery } from "@tanstack/react-query";
import { dataUserIdService } from "../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";

interface NavbarLinkItem {
  id: number;
  user_id: number;
  Links: string;
}

interface NavbarLinksResponse {
  statusbar: string;
  result: NavbarLinkItem[];
}

const useNavbarLinks = () => {
  const { User } = useGetUser();

  const { data: NavbarLinks, refetch } = useQuery<NavbarLinksResponse>({
    queryKey: ["databyUser"],
    enabled: !!User?.id,
    queryFn: () => dataUserIdService.getLinks(User.id),
  });

  const { mutate } = useMutation({
    mutationKey: ["deleteLink"],
    mutationFn: dataUserIdService.DeleteLink,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteLink = (linkName: string) => {
    mutate({ linkName, userId: User?.id });
  };

  return { NavbarLinks, handleDeleteLink };
};

export default useNavbarLinks;
