import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

export const GenericPageTemplate = ({ title, content, contentComponent, siteTitle }) => {
    const PageContent = contentComponent || Content;
    siteTitle = siteTitle || '';

    return (
        <div>
            <Helmet>
                <title>{`${title} - ${siteTitle}`}</title>
                <meta name="description" content={title} />
            </Helmet>

            <BannerLanding title={title} />

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
    siteTitle: PropTypes.string
};

const GenericPage = ({ data: { site, genericPage } }) => {
    const siteTitle = site.siteMetadata.title;

    return (
        <GenericPageTemplate
          contentComponent={HTMLContent}
          title={genericPage.frontmatter.title}
          content={genericPage.html}
          siteTitle={siteTitle}
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
            }
        }
        # get generic page
        genericPage: markdownRemark(id: { eq: $id }) {
            html 
            frontmatter {
                title
            }
        }
    }
`;
