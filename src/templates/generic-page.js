import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Background from '../img/banner.jpg';

export const GenericPageTemplate = ({ title, content, contentComponent, siteTitle, siteUrl, preview }) => {
    const PageContent = contentComponent || Content;

    siteTitle = siteTitle || '';
    siteUrl = siteUrl || '';
    return (
        <div>
            <Helmet>
                <title>{`${siteTitle} - ${title}`}</title>
                {/* General tags */}
                <link rel="alternate" href={siteUrl} hrefLang="it-it"/>
                <meta name="description" content={`${title} - ${siteTitle}`} />
                <meta name="image" content={Background} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={siteUrl} />
                <meta property="og:type" content={'website'} />
                <meta property="og:title" content={`${title} - ${siteTitle}`} />
                <meta property="og:description" content={`${title} - ${siteTitle}`} />
                <meta property="og:image" content={Background} />

                {/* Twitter Card tags */}
                <meta name="twitter:title" content={`${title} - ${siteTitle}`} />
                <meta name="twitter:description" content={`${title} - ${siteTitle}`} />
                <meta name="twitter:image" content={Background} />
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

GenericPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
    siteTitle: PropTypes.string,
    siteUrl: PropTypes.string,
    preview: PropTypes.bool
};

const GenericPage = ({ data: { site, genericPage } }) => {
    const siteTitle = site.siteMetadata.title;
    const siteUrl = site.siteMetadata.siteUrl + genericPage.fields.slug;

    return (
        <GenericPageTemplate
          contentComponent={HTMLContent}
          title={genericPage.frontmatter.title}
          content={genericPage.html}
          siteTitle={siteTitle}
          siteUrl={siteUrl}
        />
    )
};

GenericPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default GenericPage

export const genericPageQuery = graphql`
    query GenericPage($id: String!) {
        # site info
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        # get generic page
        genericPage: markdownRemark(id: { eq: $id }) {
            html
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
