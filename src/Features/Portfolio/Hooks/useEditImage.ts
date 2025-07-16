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

  const { mutate } = useMutation({
    mutationKey: ["editImage"],
    mutationFn: dataUserIdService.EditImageUser,
  });

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setImageUrl(tempUrl);

      mutate({
        userId: User?.id,
        imageName: tempUrl,
      });
    }
  };

  return { imageURL, handleClick, handleFileChange, fileInputRef };
};

export default useEditImage;
