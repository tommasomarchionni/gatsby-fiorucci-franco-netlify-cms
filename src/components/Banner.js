import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";
import Background from '../img/banner.jpg';

const sectionStyle = (background) => {
    background = background || Background;
    return {backgroundImage: `url(${background})`}
};

const Banner = ({title, pages, background}) => (
    <section style={ sectionStyle(background) } id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            {pages.map(({ node: page }) => (
                <div key={page.id} className="content">
                    <p>{page.frontmatter.title}</p>
                    <ul className="actions">
                        <li><Link className="button next scrolly" to={page.fields.slug}>Visualizza</Link></li>
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

Banner.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    ),
    title: PropTypes.string.isRequired,
    background: PropTypes.string,
};

export default Banner