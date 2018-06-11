import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";

const Menu = ({onToggleMenu, pages}) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={onToggleMenu} to="/">Home</Link></li>
                {
                    pages.map(({ node: page }) => (
                        <li key={page.id}>
                            <Link onClick={onToggleMenu} to={page.fields.slug}>{page.frontmatter.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <a className="close" onClick={onToggleMenu} href="javascript:;">Chiudi</a>
    </nav>
);

Menu.propTypes = {
    onToggleMenu: PropTypes.func,
    pages: PropTypes.array
};

export default Menu