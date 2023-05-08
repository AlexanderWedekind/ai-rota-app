import React, { useState } from "react";

function DisplayResponseMessage(props) {

    const newRota = props.newRota;

    return (
        <div className="display-response-message-container">
            <p>Response text:</p>
            <p>{newRota}</p>
        </div>
    )
}

export default DisplayResponseMessage
