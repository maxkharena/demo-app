// Absolute import
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Layout
import Layout from '../Layout';

// Styled
import { Submit } from '../Login/styled';

// Actions
import { deleteUser } from '../../actions';

const Home = () => {
    const dispatch = useDispatch();
    const { user: { userName } } = useSelector(state => state);
    
    return (
        <div>
           <h1>Home page</h1>
           <p>Welcome {userName || 'Whoops...'}</p>
           {userName && (
                <Submit onClick={() => dispatch(deleteUser())}>
                    delete user
                </Submit>
           )}
        </div>
    );
}

export default Layout()(Home);