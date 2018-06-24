import React from 'react'
import PropTypes from 'prop-types'
import { ThankyouPageTemplate } from '../../templates/thankyou-page';

const ThankYouPagePreview = ({ entry, widgetFor }) => (
    <div id={'wrapper'}>
        <ThankyouPageTemplate
            title={entry.getIn(['data', 'title'])}
            content={widgetFor('body')}
            preview={true}
        />
    </div>
);

ThankYouPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default ThankYouPagePreview
