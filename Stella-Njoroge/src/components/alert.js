import React from 'react';

const Alert = ({ message }) => {

    return (
        <div>
            <p className="alert-msg">{message}</p>
        </div>
    )
}

export default Alert;