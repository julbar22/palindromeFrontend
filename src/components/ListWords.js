import React from 'react'
import Word from './Word';

const ListWords = () => {
    return (
        <div className="container min-vh-75 bg-white w-70 mt-4 pt-5 px-3">
            <div className="row">
                <h2>Results:</h2>
            </div>
            <Word />
            <Word />
            <Word />
        </div>

    );

}

export default ListWords;