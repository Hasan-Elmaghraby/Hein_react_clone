import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetRoomChat } from "../apis/useGetRoomChat";
import { useGetChats } from "../apis/useGetChats";
import usePostMessage from "../apis/usePostMessage";

export const useMessages = () => {
  const queryClient = useQueryClient();

  const [message, setMessage] = useState<string>("");
  const [roomId, setRoomId] = useState("");
  const [recieverId, setRecieverId] = useState("");

  const { data: chatData, isLoading: isLoadingChat } = useGetRoomChat(roomId);
  const { data: chatUsers, isLoading: isLoadingUsers } = useGetChats();
  const { messages, other } = chatData || {};
  const { mutateAsync } = usePostMessage();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (other?.id) return;
    if (other?.id) setRecieverId(other?.id);
  }, [other?.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      await mutateAsync({ message: message, to_id: recieverId });
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["chat", roomId] });
    } catch (error) {
      console.error("Failed to sent message:", error);
    }
  };

  const handleClickUser = (room_id: string) => {
    setRoomId(room_id);
  };

  return {
    handleClickUser,
    handleSubmit,
    handleInputMessage,
    chatData,
    isLoadingChat,
    chatUsers,
    other,
    bottomRef,
    message,
    messages,
    recieverId,
    isLoadingUsers,
  };
};
