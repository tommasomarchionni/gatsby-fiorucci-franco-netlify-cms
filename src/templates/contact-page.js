import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Contact from "../components/Contact";
import Background from '../img/banner.jpg';

export const ContactPageTemplate = ({
    title,
    email,
    telephone,
    address,
    siteTitle,
    siteUrl,
    preview
}) => {
    siteTitle = siteTitle || '';
    siteUrl = siteUrl || '';
    const siteDescription = "Pagina Contatti";
    return (
        <div>
            <Helmet>
                <title>{`${title} - ${siteTitle}`}</title>
                {/* General tags */}
                <meta name="description" content={siteDescription} />
                <meta name="image" content={Background} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={Background} />

                {/* Twitter Card tags */}
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={Background} />
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
    siteUrl: PropTypes.string,
    preview: PropTypes.bool
};

const ContactPage = ({ data: { site, contactPage } }) => {
    const siteUrl = site.siteMetadata.siteUrl;
    const siteTitle = site.siteMetadata.title;
    return (
        <ContactPageTemplate
          title={contactPage.frontmatter.title}
          email={contactPage.frontmatter.email}
          telephone={contactPage.frontmatter.telephone}
          cellular={contactPage.frontmatter.cellular}
          address={contactPage.frontmatter.address}
          siteTitle={siteTitle}
          siteUrl={siteUrl}
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
                siteUrl
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
