import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
// Presentations
import Nav from "../areas/nav/Nav";
import Main from "../areas/main/Main";
import Blog from "../areas/blog/Blog";

const Frame = styled.div`
grid-area:${props => (props.$gridName)}
display: grid;
grid-template-rows: 65px auto;
grid-template-areas:
"nav"
"main";
width: 100%;
height: 100%;
overflow: hidden;
`;
const Home = ({ gridName }) => {
    return (
        <Frame $gridName={gridName}>
          <Nav titles={{a:{}, b:{}}}/>
          <Route path={`home`} exact>
            <Main gridName="main" />
          </Route>
          <Route path={`home/blog`} exact>
            <Blog gridName="main" />
          </Route>
        </Frame>
    );
};

export default Home;
