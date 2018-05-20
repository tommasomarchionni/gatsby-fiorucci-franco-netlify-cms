import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Contact from "../components/Contact";

export const ContactPageTemplate = ({
  title,
  email,
  telephone,
  address,
}) => (
    <div>
        <Helmet>
            <title>Franco Fiorucci</title>
            <meta name="description" content={title} />
        </Helmet>

        <BannerLanding title={title} />

        <div id="main">
            <Contact email={email} telephone={telephone} address={address}/>
        </div>
    </div>
)

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ContactPageTemplate
      title={frontmatter.title}
      email={frontmatter.email}
      telephone={frontmatter.telephone}
      address={frontmatter.address}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        email
        telephone
        address
      }
    }
  }
`
