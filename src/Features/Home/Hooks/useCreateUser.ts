import { useMutation } from "@tanstack/react-query";
import { userService } from "../../../Api/User/UserService";
import { navbarService } from "../../../Api/Navbar/NavbarService";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../Portfolio/Hooks/useGetUser";

const useCreateUser = () => {
  const { User } = useGetUser();
  const { mutateAsync: CreateUser } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: () => userService.CreateData(),
    onSuccess: async (data) => {
      try {
        const user = data?.user?.[0];
        if (user) {
          window.localStorage.setItem("User", JSON.stringify(user));
        }
      } catch (err) {
        console.error("Failed to save user to localStorage", err);
      }
    },
  });

  const { mutateAsync: CreateLinksByUser } = useMutation({
    mutationKey: ["createLink"],
    mutationFn: navbarService.CreateData,
  });

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    await CreateUser();
    await CreateLinksByUser(User?.id);
    navigate("/template");
  };
  return { handleCreateUser };
};

export default useCreateUser;
