import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pagine/presentazione-critica/">Presentazione Critica</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pagine/antologia-critica">Antologia Critica</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu