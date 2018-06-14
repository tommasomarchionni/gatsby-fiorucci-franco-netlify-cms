import React from 'react'
import PropTypes from 'prop-types'
import { ThemePageTemplate } from '../../templates/theme-page';

const ThemePagePreview = ({ entry, widgetFor, getAsset }) => {
    const entryWorks = entry.getIn(['data', 'works']);

    console.log('entryWorks', entryWorks);

    const works = entryWorks ? entryWorks.toJS() : [];

    console.log('works', works);

    return (
        <div id={'wrapper'}>
            <ThemePageTemplate
                title={entry.getIn(['data', 'title'])}
                subtitle={entry.getIn(['data', 'subtitle'])}
                introImage={widgetFor(entry.getIn(['data', 'intro_image']))}
                works={works}
            />
        </div>
    );
};

ThemePagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default ThemePagePreview
