import React from 'react'
import Word from './Word';
import { useSelector } from 'react-redux';
const ListWords = () => {
    const words = useSelector(state => state.words);
    const error = useSelector(state => state.error);
    return (
        <div className="container min-vh-75 bg-white w-70 mt-4 pt-5 px-3">
            <div className="row">
                <div className="col-5">
                    <h2>Results:</h2>
                </div>
                {error ? (
                    <div className="alert alert-danger col-auto" role="alert"
                        data-testid="alertError"
                    >
                        {error}
                    </div>
                ) : null}

            </div>
            <div data-testid="listWords">
                {words.length === 0 ? 'No data' :
                    (
                        words.map((word, i) =>
                            <Word key={`${i}word`} word={word} data-testid={`${i}word`} />
                        )
                    )
                }
            </div>

        </div>

    );

}

export default ListWords;