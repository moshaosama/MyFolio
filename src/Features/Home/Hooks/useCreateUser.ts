import { useMutation } from "@tanstack/react-query";
import { userService } from "../../../Api/User/UserService";
import { navbarService } from "../../../Api/Navbar/NavbarService";
import { useNavigate } from "react-router-dom";

const useCreateUser = () => {
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
    mutationFn: (user_id) => navbarService.CreateData(user_id),
    onSuccess: () => {
      console.log("Success Created!");
    },
  });

  const navigate = useNavigate();

  const handleCreteUser = async () => {
    const data = await CreateUser();
    const createdUser = data?.user?.[0];

    if (createdUser?.id) {
      await CreateLinksByUser(createdUser.id);
      navigate("/template");
    }
  };
  return { handleCreteUser };
};

export default useCreateUser;
