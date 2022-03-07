import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "../areas/SideBar";
import Home from "./Home";
import styled from 'styled-components';

const Frame = styled.div`
   display: grid;
   grid-template-columns: 5rem auto;
   grid-template-areas: "sidebar home";
   width: 100vw;
   height: 100vh;
`;

const Hub = ({ match }) => {
    return (
        <Frame>
          <SideBar gridName="sidebar" />
          <Outlet />
        </Frame>
    );
};

export default Hub;
