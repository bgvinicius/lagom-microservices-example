import React, { FunctionComponent } from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ReturnButton: FunctionComponent = props => {
    return (
        <Link to="/" className="return-button">
            <FontAwesomeIcon icon={faArrowLeft} size="4x"/>
        </Link>
    );
};

export default ReturnButton;