import React from 'react';
import UserControl from './UserControl';
import SelectionMenu from './SelectionMenu';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Bar = tw.nav`relative flex bg-white shadow-md items-center justify-between `;
const Nav = ({ titles }) => {
    // const { keycloak } = useKeycloak();
    const keycloak = {authenticated: false };
    return (
        <nav className={styles.nav}>
          <div className={styles.sectionItem}>
            <SelectionMenu />
          </div>
          <div>
            {!keycloak.authenticated && (
                <button type="button"
                        className={styles.testLoginButton}
                        onClick={() => console.log(window.location)}>
                  Login
                </button>
            )}
            {!!keycloak.authenticated && (
                <button type="button"
                        className={styles.testLoginButton}
                        onClick={() => keycloak.logout()}>
                  Logout
                </button>
            )}
          </div>
          <div className={styles.search}>
            <span>Search</span>
          </div>
          <UserControl />
        </nav>
    );
};

export default Nav;
