import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page';

const ContactPagePreview = ({ entry }) => (
    <div id={'wrapper'}>
        <ContactPageTemplate
            title={entry.getIn(['data', 'title'])}
            email={entry.getIn(['data', 'email'])}
            telephone={entry.getIn(['data', 'telephone'])}
            address={entry.getIn(['data', 'address'])}
        />
    </div>
);

ContactPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default ContactPagePreview
