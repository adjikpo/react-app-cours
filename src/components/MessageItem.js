import React from 'react';
import PropTypes from 'prop-types';

export const MessageItem = (props) => {

    return (
        <li>
            <div>
                    <strong>@{ props.username }</strong>
                    <div>{ props.message }</div>
            </div>
        </li>
    )

};

MessageItem.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };
