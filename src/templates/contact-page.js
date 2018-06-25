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
    siteTitle,
    preview
}) => {
    siteTitle = siteTitle || '';
    return (
        <div>
            <Helmet>
                <title>{`${title} - ${siteTitle}`}</title>
                <meta name="description" content={title} />
            </Helmet>

            <BannerLanding title={title} preview={preview} />

            <div id="main">
                <Contact email={email} telephone={telephone} address={address}/>
            </div>
        </div>
    );
};

ContactPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    siteTitle: PropTypes.string,
    preview: PropTypes.bool
};

const ContactPage = ({ data: { site, contactPage } }) => {
    const siteTitle = site.siteMetadata.title;
    return (
        <ContactPageTemplate
          title={contactPage.frontmatter.title}
          email={contactPage.frontmatter.email}
          telephone={contactPage.frontmatter.telephone}
          cellular={contactPage.frontmatter.cellular}
          address={contactPage.frontmatter.address}
          siteTitle={siteTitle}
        />
    )
};

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ContactPage

export const contactPageQuery = graphql`
    query ContactPage($id: String!) {
        # site info
        site {
            siteMetadata {
                title
                description
            }
        }
        # get contact page
        contactPage: markdownRemark(id: { eq: $id }) { 
            frontmatter {
                title
                email
                telephone
                cellular
                address
            }
        }
    }
`;
