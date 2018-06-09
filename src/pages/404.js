import React from 'react'
import { NotFoundPageTemplate } from "../templates/notfound-page";
import { HTMLContent } from '../components/Content'

const NotFoundPageNetlify = ({data}) => {
    return data.allMarkdownRemark.edges
        .filter((page) => page.node.frontmatter.templateKey === 'notfound-page')
        .map((page) =>
            (
                <NotFoundPageTemplate
                    contentComponent={HTMLContent}
                    title={page.node.frontmatter.title}
                    content={page.node.html}
                />
            )
    ).pop();
};

export default NotFoundPageNetlify

export const notFoundNetlifyQuery = graphql`
  query notFoundNetlifyQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___orderIndex] }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
