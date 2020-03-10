import React, { FunctionComponent, useContext } from 'react';
import cx from 'classnames';
import mainCtx from '../../contexts/mainCtx';
import InsightLogo from '../../assets/logo-insight.png';
import "./styles.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SideMenu: FunctionComponent = props => {
    const { menuOpen, setMenuOpen } = useContext(mainCtx);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        // TODO: clean this, now we don't open the menu anymore.
        <div className={cx("side-menu-container", {
            open: menuOpen
        })}>
            <Link to="/" onClick={toggleMenu} className="menu-icon">
                <FontAwesomeIcon icon={faArrowLeft} size="4x"/>
            </Link>
            <div className="side-menu-body">
                
            </div>
            <div className="side-menu-footer">
                <img src={InsightLogo} alt='Logotipo do Insight Data Science Lab' />
            </div>
        </div>
    );
};

export default SideMenu;