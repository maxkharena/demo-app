import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    padding: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 500px;
    box-shadow: 0px 0px 4px 0px black;
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 8px;
    width: auto;
    font-size: 15px;
    margin-bottom: 150px;
`;

export const Nav = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: black;
  padding-bottom: 5px;
  white-space: nowrap;
  cursor: pointer;
  margin-right: min(36px, 10%);
  text-decoration: none;

  &:first-child { margin-left: 'auto' }

  &:last-child {  margin-right: 'auto' }

  &.active {
    border-bottom: 3px solid #673ab7;
  }
`;