// Absolute imports
import React from 'react';

// Styled
import { Wrapper, NavWrapper, Nav } from './styled';


const HOC = ({ children }) => (
  <Wrapper>
    <NavWrapper>
        <Nav to="/login">Login</Nav>
        <Nav to="/home/user">Home</Nav>
        <Nav to="/about">About</Nav>
    </NavWrapper>
    {children}
  </Wrapper>
);

const Layout =  (customProps) => (Child) => (props) => (
    <HOC {...customProps} {...props}>
        <Child {...props} />
    </HOC>
);

export default Layout;
