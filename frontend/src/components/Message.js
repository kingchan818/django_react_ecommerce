import React from 'react';
import { Alert } from 'react-bootstrap';

function Message({ variant, error }) {
    return <Alert variant={variant}>{error}</Alert>;
}

export default Message;
