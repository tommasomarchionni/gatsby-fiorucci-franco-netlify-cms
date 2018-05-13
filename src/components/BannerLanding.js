import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

const BannerLanding = ({ title, subtitle }) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            {subtitle ? <div className="content">
                <p>{subtitle}</p>
            </div> : ''}
            <ul className="actions">
                <li><Link className="button previous scrolly" to="/">Indietro</Link></li>
            </ul>
        </div>
    </section>
)

BannerLanding.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default BannerLanding
