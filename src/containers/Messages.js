import React from "react";
const className = 'alert-info';



const Message = (props) => {
    return (
        <ul className = {className}> 
        { props.username }
        {props.message} </ul>
    )
};

export default Message;