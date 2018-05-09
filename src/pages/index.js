import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Banner from '../components/Banner'
import Theme from '../components/Theme'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: themes } = data.allMarkdownRemark

    return (
        <div>
            <Banner />
            <div id="main">
                <section id="one" className="tiles" >
                    {themes
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
            </div>
        </div>



      // <section className="section">
      //   <div className="container">
      //     <div className="content">
      //       <h1 className="has-text-weight-bold is-size-2">Latest Themes</h1>
      //     </div>
      //     {themes
      //       .filter(theme => theme.node.frontmatter.templateKey === 'theme-page')
      //       .map(({ node: theme }) => (
      //         <div
      //           className="content"
      //           style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
      //           key={theme.id}
      //         >
      //           <p>
      //             <Link className="has-text-primary" to={theme.fields.slug}>
      //               {theme.frontmatter.title}
      //             </Link>
      //             <span> &bull; </span>
      //             <small>{theme.frontmatter.date}</small>
      //           </p>
      //           <p>
      //             {theme.excerpt}
      //             <br />
      //             <br />
      //             <Link className="button is-small" to={theme.fields.slug}>
      //               Keep Reading →
      //             </Link>
      //           </p>
      //         </div>
      //       ))}
      //   </div>
      // </section>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            intro_image
            templateKey
            subtitle
          }
        }
      }
    }
  }
`
