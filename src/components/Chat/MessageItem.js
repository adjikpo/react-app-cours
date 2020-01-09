import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'react-emoji-render';
import styled from 'styled-components';

const Thing = styled.div`
    color: black;

    .something {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
    }

`

export const MessageItem = (props) => {

    return (
        <li>
            <Thing>
                    <strong>@{ props.username }</strong>
                    <div>
                        <Emoji text={ props.message } />
                    </div>
                    <i>{ props.sentAt }</i>
            </Thing>
        </li>
    )

};

MessageItem.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };
