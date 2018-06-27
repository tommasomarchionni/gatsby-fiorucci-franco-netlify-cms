import React from 'react'
import PropTypes from 'prop-types'
import { ThemePageTemplate } from '../../templates/theme-page';

const ThemePagePreview = ({ entry, fields, widgetFor }) => {
    const entryWorks = entry.getIn(['data', 'works']);
    const works = entryWorks ? entryWorks.toJS() : [];
    const rawMediaPath = fields.getIn([4, 'rawMediaPath']);
    return (
        <div id={'wrapper'}>
            <ThemePageTemplate
                title={entry.getIn(['data', 'title'])}
                subtitle={entry.getIn(['data', 'subtitle'])}
                introText={widgetFor('intro_text')}
                introImage={entry.getIn(['data', 'intro_image']).replace('../../img/', rawMediaPath)}
                works={works.map((work) => {
                    work.image =  work.image ? work.image.replace('../../img/', rawMediaPath) : '';
                    return work;
                })}
                preview={true}
            />
        </div>
    );
};

ThemePagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    fields: PropTypes.shape({
        getIn: PropTypes.func,
    })
};

export default ThemePagePreview
