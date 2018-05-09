import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";

const Theme = ({image, title, subtitle, link}) => (
    <article style={{backgroundImage: `url(${image})`}}>
        <header className="major">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </header>
        <Link to={link} className="link primary" />
    </article>
)

Theme.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string.isRequired,
}

export default Theme
