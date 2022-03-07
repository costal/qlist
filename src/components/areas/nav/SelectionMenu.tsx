import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import styles from "./SelectionMenu.css";

const SelectionMenu = () => {
    return (
        <div className={styles.menu}>
          <NavLink to={'home'}
                   className={styles.navLink}
                   activeClassName={styles.activeNavLink}>
            <UilBrain className={styles.linkIcon} />
            <span className={styles.linkText}>Intelligence</span>
          </NavLink>
          <NavLink to={'personality'}
                   className={styles.navLink}
                   activeClassName={styles.activeNavLink}>
            <UilHeadSide className={styles.linkIcon} />
            <span className={styles.linkText}>Personality</span>
          </NavLink>
        </div>
    );
};

export default SelectionMenu;
