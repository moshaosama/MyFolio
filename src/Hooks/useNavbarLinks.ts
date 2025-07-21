import { useMutation, useQuery } from "@tanstack/react-query";
import { dataUserIdService } from "../Api/DataByUserId/DataUserIdService";
import useGetUser from "../Features/Portfolio/Hooks/useGetUser";
import { useEffect, useState } from "react";

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
  const [isFound, setIsFound] = useState({
    About: false,
    Projects: false,
    Skills: false,
    Experience: false,
    Contact: false,
  });

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

  const rawLinks = NavbarLinks?.result?.[0]?.Links;

  useEffect(() => {
    if (!rawLinks) return;

    try {
      const links =
        typeof rawLinks === "string" ? JSON.parse(rawLinks) : rawLinks;

      if (!Array.isArray(links)) return;

      const updatedFound = {
        About: links.some((el: any) => el.name === "About"),
        Projects: links.some((el: any) => el.name === "Projects"),
        Skills: links.some((el: any) => el.name === "Skills"),
        Experience: links.some((el: any) => el.name === "Experience"),
        Contact: links.some((el: any) => el.name === "Contact"),
      };

      setIsFound(updatedFound);
    } catch (err) {
      console.error("JSON parse error:", err);
    }
  }, [rawLinks]);

  return { NavbarLinks, handleDeleteLink, isFound };
};

export default useNavbarLinks;
