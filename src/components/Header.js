import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addWord } from '../actions/wordActions';

const Header = () => {

    const [text, saveText] = useState('');

    const dispatch = useDispatch();

    const sendWord = () => dispatch(addWord(text));

    return (
        <div className="bg-danger">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="row mt-3 mb-3">
                        <div className="col-9">
                            <input type="text" placeholder="Insert Text" className="form-control col-lg-3 col-md-3"
                                value={text}
                                onChange={e => saveText(e.target.value)}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-primary col-auto"
                            onClick={sendWord}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Header;