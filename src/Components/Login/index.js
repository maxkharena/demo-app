// Absolute import
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Styled
import { Wrapper, Input, Submit } from './styled';

// Layout
import Layout from '../Layout';

// Actions
import { addUser } from '../../actions';

const Login = () => {
    const [data, setData] = useState({ userName: '', password: ''});
    const dispatch = useDispatch();

    const onChange = (field) => (event) => {
        setData({...data, [field]: event.target.value});
    };

    return (
        <Wrapper>
            <Input 
                type="text" 
                value={data.userName} 
                placeholder="user name" 
                onChange={onChange('userName')}
            />
            <Input 
                type="password" 
                value={data.password} 
                placeholder="password" 
                onChange={onChange('password')}
            />
            <Submit onClick={() => dispatch(addUser(data))}>submit</Submit>
        </Wrapper>
    );
}

export default Layout()(Login);