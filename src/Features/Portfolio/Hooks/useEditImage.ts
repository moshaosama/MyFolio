import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";

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
    onSuccess: async (data: any) => {
      await window.localStorage.setItem("User", JSON.stringify(data?.user[0]));
    },
  });

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setImageUrl(tempUrl);

      const formData = new FormData();
      formData.append("image", file);

      mutateAsync({
        userId: User?.id,
        imageName: formData,
      });
    }
  };

  return { imageURL, handleClick, handleFileChange, fileInputRef };
};

export default useEditImage;
