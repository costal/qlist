import React from 'react';
import TestGrid from "./TestGrid";
import UserStats from "./UserStats";
import GenStats from "./GenStats";
import styles from './Main.css';

const Main = () => {
    return (
        <div className={styles.homeView}>
          <TestGrid />
          <UserStats />
          <GenStats />
        </div>
    );
};

export default Main;
