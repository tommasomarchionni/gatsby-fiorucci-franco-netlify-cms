import React from 'react'
import PropTypes from 'prop-types'
import { NotFoundPageTemplate } from "../../templates/notfound-page";

const NotFoundPagePreview = ({ entry, widgetFor }) => (
    <div id={'wrapper'}>
        <NotFoundPageTemplate
            title={entry.getIn(['data', 'title'])}
            content={widgetFor('body')}
        />
    </div>
);

NotFoundPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default NotFoundPagePreview
