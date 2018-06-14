import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

export const ThankyouPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
      <div>
          <Helmet>
              <title>Franco Fiorucci</title>
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

ThankyouPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ThankyouPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ThankyouPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
};

ThankyouPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ThankyouPage

export const thankyouPageQuery = graphql`
  query ThankyouPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
