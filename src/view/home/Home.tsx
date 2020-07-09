import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
    return (
        <div>
            <Link to={'/list'}>songs list</Link>
        </div>
    );
};

export default Home;
