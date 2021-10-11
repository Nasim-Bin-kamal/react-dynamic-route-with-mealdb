import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const handleBackToHome = () => {
        history.push("/home");
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-center my-5 text-danger">404 Page Not Found!!</h1>
            <button onClick={handleBackToHome}
                className="btn btn-warning">Back to Home</button>
        </div>
    );
};

export default NotFound;