import React from 'react'
import PropTypes from 'prop-types';
import { HTMLContent } from "./Content";
import Img from "gatsby-image";

const Work = ({ image, title, description, onClick }) =>  {
    return (
        <section>
            <a className="image" onClick={() => onClick({title, description})}>
                {(typeof image !== 'string') ? (
                    <Img
                        sizes={image.childImageSharp.sizes}
                        alt={title}
                    />
                ) : (
                    <div className="gatsby-image-outer-wrapper" style={{position: 'relative'}}>
                        <div className="gatsby-image-wrapper" style={{position: 'relative', overflow: 'hidden'}}>
                            <div style={{width: '100%', paddingBottom: '77.39938080495355%' }} />
                            <img src={image}
                                style={{position: 'absolute', top: '0px', left: '0px', transition: 'opacity 0.5s', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1}}
                            />
                        </div>
                    </div>
                )}
            </a>
            <div className="content">
                <div className="inner">
                    <header className="major inline-flex">
                        <h3>{title}</h3>
                    </header>
                    <HTMLContent className="inner" content={description} />
                </div>
            </div>
        </section>
    )
};

Work.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    description: PropTypes.string,
};

export default Work
