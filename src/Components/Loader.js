import React from 'react';

// Gif
import spinner from '../Gif/spinner.gif';

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loading" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;