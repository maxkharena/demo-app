// Absolute import
import React from 'react';
import { useParams } from 'react-router-dom';

// Layout
import Layout from '../Layout';

const Home = () => {
    let { userName } = useParams();
    return (
        <div>
           <h1>Home page</h1>
           <p>Welcome {userName}</p>
        </div>
    );
}

export default Layout()(Home);