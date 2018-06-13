import React from 'react'
import { NotFoundPageTemplate } from "../templates/notfound-page";
import { HTMLContent } from '../components/Content'

const NotFoundPageNetlify = ({data}) => {
    return data.allMarkdownRemark.edges
        .map((page) =>
            (
                <NotFoundPageTemplate
                    key={page.node.id}
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
    allMarkdownRemark(
        filter: {
            frontmatter: {
                templateKey: {eq: "notfound-page"}
            }
        }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
