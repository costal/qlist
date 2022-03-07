import React from 'react';
import TestCard from "./TestCard";
import styles from './TestGrid.css';

const TestGrid = () => {
    return (
        <div className={styles.tests}>
          <TestCard className={styles.card} />
          <TestCard className={styles.card} />
          <TestCard className={styles.card} />
          <TestCard className={styles.card} />
          <TestCard className={styles.card} />
        </div>
    );
};

export default TestGrid;
