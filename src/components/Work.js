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
                    <img src={image} />
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
