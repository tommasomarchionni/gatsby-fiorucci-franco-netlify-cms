import React from 'react'
import PropTypes from 'prop-types';
import Content from "./Content";

const Work = ({ image, title, content, contentComponent }) =>  (
    <section>
        <img src={image} alt={title} />
        <div className="content">
            <div className="inner">
                <header className="major">
                    <h3>{title}</h3>
                </header>
                <Content className="inner" content={content} />
            </div>
        </div>
    </section>
)

Work.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

export default Work
