import { Section } from "@/shared/components/Section";
import { useTranslation } from "react-i18next";
import { UserInfo } from "./components/UserInfo";
import { UserChat } from "./components/UserChat";
import { Message } from "./components/Message";
import { InputMessage } from "./components/InputMessage";
import { ChatUsers, MessagesTypes } from "./types/Messages";
import { useMessages } from "./hooks/useMessages";
import { NavBtn } from "./components/NavBtn";
import { useState } from "react";
import Loader from "@/shared/components/Loader";
// import { SectionTitle } from "@/shared/components/SectionTitle";
// import { Empty } from "@/shared/components/Empty";
// import chatImage from "@public/images/chat/noData.png";
import styles from "./styles.module.scss";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const Messages = () => {
  useTabTitle("messages");
  const { t } = useTranslation();
  const {
    handleClickUser,
    handleInputMessage,
    handleSubmit,
    chatUsers,
    isLoadingChat,
    other,
    bottomRef,
    message,
    messages,
    isLoadingUsers,
  } = useMessages();

  const [isNavOpening, setIsNaveOpening] = useState(false);

  const handleClickOpenUsers = () => {
    setIsNaveOpening(!isNavOpening);
  };

  return (
    <Section>
      {/* <>
          <SectionTitle right title={t("messages.title")} />
          <Empty src={chatImage} text="No messages" />
        </> */}
      (
      <div className={styles.chatWrapper}>
        <div className={`${styles.messages} ${isNavOpening && styles.active}`}>
          <h2 className={styles.mainTitle}>{t("messages.title")}</h2>
          {isLoadingUsers ? (
            <Loader />
          ) : (
            <div className={styles.messagesWrappper}>
              {chatUsers?.map(
                ({ id, user, message, is_readed, room_id }: ChatUsers) => (
                  <UserInfo
                    key={id}
                    user={{
                      userImage: user.image,
                      userName: user.name,
                      is_readed: is_readed,
                      time: user.last_login_time,
                    }}
                    description={message}
                    onClick={() => handleClickUser(room_id)}
                  />
                )
              )}
            </div>
          )}
        </div>

        <div className={styles.chatsBody}>
          <div className={styles.userChatWrapper}>
            <UserChat
              userImage={other?.image}
              userName={other?.name}
              time={other?.last_login_time}
            />
            <NavBtn onClick={handleClickOpenUsers} isNavOpen={isNavOpening} />
          </div>
          {isLoadingChat ? (
            <Loader />
          ) : (
            <div className={styles.chatsBodyWrapper}>
              <div ref={bottomRef} />
              {messages ? (
                messages?.map(
                  ({
                    id,
                    message,
                    created_at,
                    fromme,
                    from,
                  }: MessagesTypes) => (
                    <Message
                      key={id}
                      userName={from.name}
                      userImage={from.image}
                      message={message}
                      created_at={created_at}
                      fromme={fromme}
                    />
                  )
                )
              ) : (
                <div>No user chosen to contact with....</div>
              )}
            </div>
          )}
          <InputMessage
            onSubmit={handleSubmit}
            onChange={handleInputMessage}
            value={message}
          />
        </div>
      </div>
      )
    </Section>
  );
};

export default Messages;
