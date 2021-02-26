// Absolute imports
import React from 'react';

// Styled
import { Wrapper, NavWrapper, Nav } from './styled';

const LINKS = [
  { to: '/login', title: 'Login' },
  { to: '/home/user', title: 'Home' },
  { to: '/about', title: 'About' },
];

const HOC = ({ children }) => (
  <Wrapper>
    <NavWrapper>
        {LINKS.map(({ to, title }) => (
          <Nav to={to}>{title}</Nav>
        ))}
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
