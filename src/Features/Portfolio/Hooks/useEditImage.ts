import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";
import { userService } from "../../../Api/User/UserService";

const useEditImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageURL, setImageUrl] = useState("");
  const { User } = useGetUser();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { mutateAsync } = useMutation({
    mutationKey: ["editImage"],
    mutationFn: dataUserIdService.EditImageUser,
  });

  const { data, refetch } = useQuery({
    queryKey: ["getUserByid"],
    queryFn: () => userService.GetData(User.id),
    enabled: false, // مننفذهاش تلقائيًا
  });

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setImageUrl(tempUrl);

      await mutateAsync({
        userId: User?.id,
        imageName: tempUrl,
      });

      const updated = await refetch();
      await window.localStorage.setItem(
        "User",
        JSON.stringify(updated?.data?.user[0])
      );
    }
  };

  return { imageURL, handleClick, handleFileChange, fileInputRef };
};

export default useEditImage;
