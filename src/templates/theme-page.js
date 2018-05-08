import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const ThemePageTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ThemeContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <ThemeContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ThemePageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const ThemePage = ({ data }) => {
  const { markdownRemark: theme } = data

  return (
    <ThemePageTemplate
      content={theme.html}
      contentComponent={HTMLContent}
      description={theme.frontmatter.description}
      helmet={<Helmet title={`${theme.frontmatter.title} | Blog`} />}
      title={theme.frontmatter.title}
    />
  )
}

ThemePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ThemePage

export const pageQuery = graphql`
  query ThemePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
