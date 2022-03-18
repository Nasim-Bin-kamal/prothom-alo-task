import React from 'react';
import "./Header.scss";
import companyLogo from "../../images/palo-bangla-bb996cdb70d2e0ccec8c.svg";

const Header = () => {
    return (
        <div className='headerSection'>
            <img className='logo' src={companyLogo} alt="logo" srcset="" />
        </div>
    );
};

export default Header;