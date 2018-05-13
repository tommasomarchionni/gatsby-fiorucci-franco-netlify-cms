import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Link from 'gatsby-link'
import BannerLanding from '../components/BannerLanding'
import pic08 from '../img/pic08.jpg'
import pic09 from '../img/pic09.jpg'
import pic10 from '../img/pic10.jpg'

export const ThemePageTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ThemeContent = contentComponent || Content

  return (
      <div>
          <BannerLanding title={title}/>

          <div id="main">
              <section id="two" className="spotlights">
                  <section>
                      <Link to="/generic" className="image">
                          <img src={pic08} alt="" />
                      </Link>
                      <div className="content">
                          <div className="inner">
                              <header className="major">
                                  <h3>Orci maecenas</h3>
                              </header>
                              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                              <ul className="actions">
                                  <li><Link to="/generic" className="button">Learn more</Link></li>
                              </ul>
                          </div>
                      </div>
                  </section>
                  <section>
                      <Link to="/generic" className="image">
                          <img src={pic09} alt="" />
                      </Link>
                      <div className="content">
                          <div className="inner">
                              <header className="major">
                                  <h3>Rhoncus magna</h3>
                              </header>
                              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                              <ul className="actions">
                                  <li><Link to="/generic" className="button">Learn more</Link></li>
                              </ul>
                          </div>
                      </div>
                  </section>
                  <section>
                      <Link to="/generic" className="image">
                          <img src={pic10} alt="" />
                      </Link>
                      <div className="content">
                          <div className="inner">
                              <header className="major">
                                  <h3>Sed nunc ligula</h3>
                              </header>
                              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                              <ul className="actions">
                                  <li><Link to="/generic" className="button">Learn more</Link></li>
                              </ul>
                          </div>
                      </div>
                  </section>
              </section>
          </div>

      </div>
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
