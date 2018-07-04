import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

export const ThankyouPageTemplate = ({ title, content, contentComponent, siteTitle, siteUrl, preview }) => {
  const PageContent = contentComponent || Content;
  siteTitle = siteTitle || '';

  return (
      <div>
          <Helmet>
              <title>{`${title} - ${siteTitle}`}</title>
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

ThankyouPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
    siteTitle: PropTypes.string,
    siteUrl: PropTypes.string,
    preview: PropTypes.bool
};

const ThankyouPage = ({ data: { site, thankYouPage } }) => {
    const siteTitle = site.siteMetadata.title;
    const siteUrl = site.siteMetadata.siteUrl;

    return (
        <ThankyouPageTemplate
          contentComponent={HTMLContent}
          title={thankYouPage.frontmatter.title}
          content={thankYouPage.html}
          siteTitle={siteTitle}
          siteUrl={siteUrl}
        />
    )
};

ThankyouPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ThankyouPage

export const thankyouPageQuery = graphql`
    query ThankYouPage($id: String!) {
        # site info
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        # get thank you page
        thankYouPage: markdownRemark(id: { eq: $id }) {
            html 
            frontmatter {
                title
            }
        }
    }
`;
