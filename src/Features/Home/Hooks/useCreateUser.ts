import { useMutation } from "@tanstack/react-query";
import { userService } from "../../../Api/User/UserService";
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

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    await CreateUser();
    navigate("/template");
  };
  return { handleCreateUser };
};

export default useCreateUser;
