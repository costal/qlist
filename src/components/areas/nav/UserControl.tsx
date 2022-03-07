import React from 'react';
import { VscBell } from 'react-icons/vsc';
import styles from "./UserControl.css";

const UserControl = () => {
    return (
        <div className={styles.userControl}>
          <VscBell className={styles.bell} />
          <div className={styles.userLink}>
            <span>Avatar</span>
            <span>FirstName LastName</span>
          </div>
        </div>
    );
};

export default UserControl;
