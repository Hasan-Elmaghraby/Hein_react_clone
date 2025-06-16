import React from "react";
import { Section } from "@/shared/components/Section";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { UserInfo } from "./components/UserInfo";
import { UserChat } from "./components/UserChat";

const Messages = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <div className={styles.chatWrapper}>
        <div className={styles.messages}>
          <h2>{t("messages")}</h2>
          <div className={styles.messagesWrappper}>
            <UserInfo
              user={{
                userImage: "",
                userName: "",
                userRate: "2",
                time: "sdfk",
              }}
              description="dslkfjdsfjk"
            />
            <UserInfo
              user={{
                userImage: "",
                userName: "",
                userRate: "2",
                time: "sdfk",
              }}
              description="dslkfjdsfjk"
            />
            <UserInfo
              user={{
                userImage: "",
                userName: "",
                userRate: "2",
                time: "sdfk",
              }}
              description="dslkfjdsfjk"
            />
            <UserInfo
              user={{
                userImage: "",
                userName: "",
                userRate: "2",
                time: "sdfk",
              }}
              description="dslkfjdsfjk"
            />
            <UserInfo
              user={{
                userImage: "",
                userName: "",
                userRate: "2",
                time: "sdfk",
              }}
              description="dslkfjdsfjk"
            />
          </div>
        </div>

        <div className={styles.chatsBody}>
       <UserChat userImage="df" userName="ld" time="lsdk"/>
        </div>
      </div>
    </Section>
  );
};

export default Messages;
