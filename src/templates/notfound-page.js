import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

export const NotFoundPageTemplate = ({ title, content, contentComponent, siteTitle, siteUrl, preview }) => {
    const PageContent = contentComponent || Content;
    siteTitle = siteTitle || '';

    return (
        <div>
            <Helmet>
                <title>{`${siteTitle} - ${title}`}</title>
                <link rel="alternate" href={siteUrl} hrefLang="it-it"/>
                <meta name="description" content={title} />
            </Helmet>

            <BannerLanding title={title} preview={preview} />

            <div id="main">
                <section id="one">
                    <PageContent className="inner" content={content} />
                </section>
            </div>
        </div>
    )
};

NotFoundPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
    siteTitle: PropTypes.string,
    siteUrl: PropTypes.string,
    preview: PropTypes.bool
};

const NotFoundPage = ({ data: { site, notFoundPage } }) => {
    const siteTitle = site.siteMetadata.title;
    const siteUrl = site.siteMetadata.siteUrl;
    return (
        <NotFoundPageTemplate
            contentComponent={HTMLContent}
            siteUrl={siteUrl}
            title={notFoundPage.frontmatter.title}
            content={notFoundPage.html}
            siteTitle={siteTitle}
        />
    )
};

NotFoundPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NotFoundPage

export const notFoundPageQuery = graphql`
    query notFoundPage($id: String!) {
        # site info
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        # get not found page
        notFoundPage: markdownRemark(id: { eq: $id }) {
            html 
            frontmatter {
                title
            }
        }
    }
`;