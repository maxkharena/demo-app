import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 150px;
    height: 40px;
    margin-bottom: 10px;
    border: none;
`;

export const Submit = styled(Link)`
    width: 150px;
    height: 40px;
    border: none;
    font-size: 16px;
    border: none;
    text-decoration: none;
    color: white;
    text-align: center;
    display: inline-block;
    line-height: 40px;
    font-weight: 500;
    background-color: #673ab7;
`;