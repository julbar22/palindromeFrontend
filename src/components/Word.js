import React from 'react'

const Word = ({ word }) => {
    return (
        <div className="row justify-content-center mb-2">
            <div className="col-8 border border-secondary rounded p-1">
                <div className="row">
                    <div className="col-8">
                        <h5>{word.text}</h5>
                    </div>
                    {
                        word.palindrome ? (
                            <div className="col-4">
                                <p className="text-end">Palindrome</p>
                            </div>) :
                            null
                    }

                </div>
            </div>
        </div>

    );

}

export default Word;