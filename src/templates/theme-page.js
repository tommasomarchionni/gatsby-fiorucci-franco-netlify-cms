import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Content, { HTMLContent } from '../components/Content'
import Link from 'gatsby-link'
import BannerLanding from '../components/BannerLanding'
import Work from "../components/Work";
import WorkList from "../components/WorkList";

export const ThemePageTemplate = ({
  title,
  subtitle,
  works,
}) => (
  <div>
      <BannerLanding title={title} subtitle={subtitle}/>

      <div id="main">
          <section id="two" className="spotlights">
                <WorkList listItems={works}/>
              {/*<Work*/}
                  {/*contentComponent={HTMLContent}*/}
                  {/*title={post.frontmatter.title}*/}
                  {/*content={post.html}*/}
              {/*/>*/}
              {/*<section>*/}
                  {/*<Link to="/generic" className="image">*/}
                      {/*<img src={pic09} alt="" />*/}
                  {/*</Link>*/}
                  {/*<div className="content">*/}
                      {/*<div className="inner">*/}
                          {/*<header className="major">*/}
                              {/*<h3>Rhoncus magna</h3>*/}
                          {/*</header>*/}
                          {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>*/}
                          {/*<ul className="actions">*/}
                              {/*<li><Link to="/generic" className="button">Learn more</Link></li>*/}
                          {/*</ul>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              {/*</section>*/}
              {/*<section>*/}
                  {/*<Link to="/generic" className="image">*/}
                      {/*<img src={pic10} alt="" />*/}
                  {/*</Link>*/}
                  {/*<div className="content">*/}
                      {/*<div className="inner">*/}
                          {/*<header className="major">*/}
                              {/*<h3>Sed nunc ligula</h3>*/}
                          {/*</header>*/}
                          {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>*/}
                          {/*<ul className="actions">*/}
                              {/*<li><Link to="/generic" className="button">Learn more</Link></li>*/}
                          {/*</ul>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              {/*</section>*/}
          </section>
      </div>
  </div>
)

ThemePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  works: PropTypes.array,
}

const ThemePage = ({ data }) => {
  const { markdownRemark: theme } = data
  return (
    <ThemePageTemplate
      title={theme.frontmatter.title}
      subtitle={theme.frontmatter.subtitle}
      works={theme.frontmatter.works}
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
        title
        subtitle
        works {
          image
          title
          description  
        }
      }
    }
  }
`
