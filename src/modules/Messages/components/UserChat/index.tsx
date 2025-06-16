import React from 'react'
import styles from './styles.module.scss'


interface Props{
  userImage: string;
  userName: string;
  time: string;
}


export const UserChat : React.FC<Props> = ({userImage,userName,time}) => {
  return (
    <div className={styles.userWrapper}>
          <figure className={styles.userImage}>
            <img src={userImage} alt={userName} />
          </figure>
          <div className={styles.userNameWrapper}>
            <h3 className={styles.name}>{userName}</h3>
            <p className={styles.time}>{time}</p>
          </div>
        </div>
  )
}
