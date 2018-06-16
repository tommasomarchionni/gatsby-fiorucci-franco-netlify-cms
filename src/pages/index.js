import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../components/Banner'
import Theme from '../components/Theme'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
    render() {
        const { data: { themePages, genericPages, site } } = this.props;
        const siteTitle = site.siteMetadata.title;
        return (
            <div>
                <Helmet>
                    <title>{`Home - ${siteTitle}`}</title>
                    <meta name="description" content={'Home'} />
                </Helmet>
                <Banner title={siteTitle} pages={genericPages.edges} />
                <div id="main">
                    <section id="one" className="tiles" >
                        {themePages.edges
                            .map(({ node: theme }) => (
                                <Theme
                                    image={theme.frontmatter.intro_image}
                                    title={theme.frontmatter.title}
                                    subtitle={theme.frontmatter.subtitle}
                                    link={theme.fields.slug}
                                    key={theme.id} />
                            ))
                        }
                    </section>
                </div>
            </div>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        themePages: PropTypes.shape({
            edges: PropTypes.array,
        }),
        genericPages: PropTypes.shape({
            edges: PropTypes.array,
        }),
        site: PropTypes.object
    })
};

export const pageQuery = graphql`
    query IndexQuery {
        # site info
        site {
            siteMetadata {
                title
                description
            }
        }        
        # get all generic-page        
        genericPages: allMarkdownRemark (
            sort: { order: ASC, fields: [frontmatter___orderIndex] }
            filter: {
                frontmatter: {
                    templateKey: {eq: "generic-page"}
                }
            }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }        
        # get all theme-page
        themePages: allMarkdownRemark (
            sort: { order: ASC, fields: [frontmatter___orderIndex] }
            filter: {
                frontmatter: {
                    templateKey: {eq: "theme-page"}
                }
            }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        intro_image {
                            childImageSharp{
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                        title
                        subtitle
                    }
                }
            }
        }
    }
`;
