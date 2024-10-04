import React from 'react';
import styles from './Team.module.css'; 

const MemberCards = ({ name, designation, imageSrc }) => {
  return (
    <>
      <div className={styles.memberCards}>
        <div className={styles.card}>
          <div className={styles["profile-image"]}>
            <img
              src={imageSrc}
              className="img-fluid rounded-circle img-top"
              alt="profile pic"
            />
          </div>
          <div className={styles["profile-info"]}>
            <h2>{name}</h2>
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCards;

