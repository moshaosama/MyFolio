import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { chatgbtService } from "../../../Api/Chatgbt/chatgbtService";
import { useForm } from "react-hook-form";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import useEditLinks from "../../Portfolio/Hooks/useEditLinks";
type Message = { message: string };

const useOpenChatBot = () => {
  const [isOpenChatBot, setIsOpenChatBot] = useState(false);
  const [SendMessages, setSendMessages] = useState<Message[]>([]);
  const { refetch } = useEditLinks();
  const { User } = useGetUser();
  const { handleSubmit, register } = useForm();

  const { mutate: handleSendMessageMutate } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: chatgbtService.SendMessage,
    onSuccess: async (data) => {
      const userData = data?.user?.[0];
      if (userData) {
        window.localStorage.setItem("User", JSON.stringify(userData));
      }
      refetch();
    },
  });

  const { mutate: handleStartChatMutate } = useMutation({
    mutationKey: ["StartChat"],
    mutationFn: chatgbtService.StartChat,
    onSuccess: (data: any) => {
      window.localStorage.setItem("Chat", JSON.stringify(data));
    },
  });

  const handleSendMessage = (data: any) => {
    setSendMessages((prev) => {
      const updated = [...prev, { message: data.message }];
      return updated;
    });

    handleSendMessageMutate({
      message: data.message,
      session: "52768a0d-4eaa-446c-a3a0-cb8886152168",
      user_id: User?.id,
    });
  };

  const handleStartChat = () => {
    handleStartChatMutate();
  };

  const StartChat = window.localStorage.getItem("Chat");

  if (StartChat) {
    JSON.parse(StartChat);
  }

  const handleTriggerChatBot = () => {
    setIsOpenChatBot(!isOpenChatBot);
  };

  return {
    isOpenChatBot,
    handleTriggerChatBot,
    handleStartChat,
    StartChat,
    handleSendMessage,
    SendMessages,
    register,
    handleSubmit,
  };
};

export default useOpenChatBot;
