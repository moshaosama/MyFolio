import { useMutation } from "@tanstack/react-query";
import { userService } from "../../../Api/User/UserService";
import { navbarService } from "../../../Api/Navbar/NavbarService";

const useCreateUser = () => {
  const { mutateAsync: CreateUser } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: () => userService.CreateData(),
    onSuccess: (data) => {
      window.localStorage.setItem("User", JSON.stringify(data.user[0]));
    },
  });

  const { mutateAsync: CreateLinksByUser } = useMutation({
    mutationKey: ["createLink"],
    mutationFn: navbarService.CreateData,
    onSuccess: () => {
      console.log("Success Created!");
    },
  });

  const handleCreteUser = async () => {
    const data = await CreateUser();

    const createdUser = data?.user?.[0];

    if (createdUser?.id) {
      await CreateLinksByUser(createdUser.id);
    }
  };

  return { handleCreteUser };
};

export default useCreateUser;
