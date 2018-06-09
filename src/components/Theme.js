import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Theme = ({image, title, subtitle, link}) => (
    <article>
        <Img
            sizes={image.childImageSharp.sizes}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }}
        />
        <header className="major">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </header>
        <Link to={link} className="link primary"/>
    </article>
)

Theme.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string.isRequired,
}

export default Theme
