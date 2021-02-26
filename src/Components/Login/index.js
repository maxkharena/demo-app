// Absolute import
import React, { useState } from 'react';

// Styled
import { Wrapper, Input, Submit } from './styled';

// Layout
import Layout from '../Layout';


const Login = () => {
    const [data, setData] = useState({ login: '', password: ''});

    const onChange = (field) => (event) => {
        setData({...data, [field]: event.target.value});
    };

    return (
        <Wrapper>
            <Input 
                type="text" 
                value={data.login} 
                placeholder="login" 
                onChange={onChange('login')}
            />
            <Input 
                type="password" 
                value={data.password} 
                placeholder="password" 
                onChange={onChange('password')}
            />
            <Submit to="/home/max">submit</Submit>
        </Wrapper>
    );
}

export default Layout()(Login);