import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Background from '../img/banner.jpg';

const sectionStyle = (background) => {
    background = background || Background;
    return {backgroundImage: `url(${background})`}
};

const BannerLanding = ({ title, subtitle, background, preview }) => (
    <section style={ sectionStyle(background) } id="banner" className="style2" >
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            {subtitle ? <div className="content">
                <p>{subtitle}</p>
            </div> : ''}
            <ul className="actions">
                <li>
                    { preview ? <a className="button previous scrolly" href="/">
                            Indietro
                        </a> :
                        <Link className="button previous scrolly" to="/">
                            Indietro
                        </Link>
                    }
                </li>
            </ul>
        </div>
    </section>
);

BannerLanding.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    background: PropTypes.string,
    preview: PropTypes.bool,
};

export default BannerLanding
