import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../components/Banner'
import Theme from '../components/Theme'
import Contact from "../components/Contact";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (
        <div>
            <Banner pages={pages
                .filter(theme => theme.node.frontmatter.templateKey === 'generic-page')
            } />
            <div id="main">
                <section id="one" className="tiles" >
                    {pages
                        .filter(theme => theme.node.frontmatter.templateKey === 'theme-page')
                        .map(({ node: theme }) => (
                            <Theme
                                image={theme.frontmatter.intro_image}
                                title={theme.frontmatter.title}
                                subtitle={theme.frontmatter.subtitle}
                                link={theme.fields.slug}
                                key={theme.id} />
                    ))}
                </section>
                {pages
                    .filter(theme => theme.node.frontmatter.templateKey === 'contact-page')
                    .map(({ node: theme }) => (
                        <Contact
                            key={theme.id}
                            email={theme.frontmatter.email}
                            telephone={theme.frontmatter.telephone}
                            address={theme.frontmatter.address} />
                    ))}
            </div>
        </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___orderIndex] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            email
            telephone
            address
            intro_image
            templateKey
            subtitle
          }
        }
      }
    }
  }
`
