import React from 'react'
import { NotFoundPageTemplate } from "../templates/notfound-page";
import { HTMLContent } from '../components/Content'
import PropTypes from "prop-types";

const NotFoundPageNetlify = ({ data: { site, allMarkdownRemark } }) => {
    const siteTitle = site.siteMetadata.title;
    return allMarkdownRemark.edges
        .map((page) =>
            (
                <NotFoundPageTemplate
                    key={page.node.id}
                    contentComponent={HTMLContent}
                    title={page.node.frontmatter.title}
                    content={page.node.html}
                    siteTitle={siteTitle}
                />
            )
    ).pop();
};

NotFoundPageNetlify.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NotFoundPageNetlify

export const notFoundNetlifyQuery = graphql`
    query notFoundNetlifyQuery {
        # site info
        site {
            siteMetadata {
                title
                description
            }
        }        
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
