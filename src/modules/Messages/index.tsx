import React from "react";
import { Section } from "@/shared/components/Section";
import { useTranslation } from "react-i18next";
import { UserInfo } from "./components/UserInfo";
import { UserChat } from "./components/UserChat";
import { useGetRoomChat } from "./apis/useGetRoomChat";
import { useGetChats } from "./apis/useGetChats";
import styles from "./styles.module.scss";
import { Message } from "./components/Message";
import { InputMessage } from "./components/InputMessage";

interface Messages {
  id: string;
  message: string;
  created_at: string;
  fromme: boolean;
  from: {
    created_at: string;
    name: string;
    image: string;
  };
}

interface ChatUsers {
  id: string;
  user: {
    image: string;
    name: string;
    last_login_time: string;
  };
  message: string;
  is_readed: boolean;
}

const Messages = () => {
  const { t } = useTranslation();
  const { data: chatData } = useGetRoomChat(195);
  const { data: chatUsers } = useGetChats();
  const { messages, other } = chatData || {};

  return (
    <Section>
      <div className={styles.chatWrapper}>
        <div className={styles.messages}>
          <h2>{t("messages")}</h2>
          <div className={styles.messagesWrappper}>
            {chatUsers?.map(({ id, user, message, is_readed }: ChatUsers) => (
              <UserInfo
                key={id}
                user={{
                  userImage: user.image,
                  userName: user.name,
                  is_readed: is_readed,
                  time: user.last_login_time,
                }}
                description={message}
              />
            ))}
          </div>
        </div>

        <div className={styles.chatsBody}>
          <UserChat
            userImage={other?.image}
            userName={other?.name}
            time={other?.last_login_time}
          />
          <div className={styles.chatsBodyWrapper}>
            {messages?.map(
              ({ id, message, created_at, fromme, from }: Messages) => (
                <Message
                  key={id}
                  userName={from.name}
                  userImage={from.image}
                  message={message}
                  created_at={created_at}
                  fromme={fromme}
                />
              )
            )}
          </div>
          <InputMessage />
        </div>
      </div>
    </Section>
  );
};

export default Messages;
