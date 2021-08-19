import React from 'react'

const Header = () => {
    return (
        <div className="bg-danger">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="row mt-3 mb-3">
                        <div className="col-9">
                            <input type="text" placeholder="Insert Text" className="form-control col-lg-3 col-md-3"></input>
                        </div>
                        <button type="submit" className="btn btn-primary col-auto">Send</button>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Header;