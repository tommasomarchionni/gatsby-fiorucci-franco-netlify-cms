import React from 'react'
import PropTypes from 'prop-types'
import { GenericPageTemplate } from '../../templates/generic-page';

const GenericPagePreview = ({ entry, widgetFor }) => (
    <div id={'wrapper'}>
        <GenericPageTemplate
            title={entry.getIn(['data', 'title'])}
            content={widgetFor('body')}
            preview={true}
        />
    </div>
);

GenericPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default GenericPagePreview
