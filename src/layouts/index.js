import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ScrollToTop from 'react-scroll-up'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FaArrowAltCircleUp from '@fortawesome/fontawesome-free-solid/faArrowAltCircleUp'

import './scss/main.scss'
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import Header from "../components/Header";

class TemplateWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children, data: { site, contactPages, genericPages } } = this.props;
        const siteTitle = site.siteMetadata.title;
        const siteDescription = site.siteMetadata.description;
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children()}
                    {contactPages.edges
                        .map(({ node: contact }) => (
                            <Contact
                                key={contact.id}
                                email={contact.frontmatter.email}
                                telephone={contact.frontmatter.telephone}
                                address={contact.frontmatter.address} />
                        ))
                        .pop()}
                </div>
                <Menu pages={genericPages.edges} onToggleMenu={this.handleToggleMenu} />
                <ScrollToTop style={{zIndex: 100}} showUnder={160}>
                    <FontAwesomeIcon duration={500} style={{height: '40px', width: '40px'}} icon={FaArrowAltCircleUp} />
                </ScrollToTop>
            </div>
        )
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string
            })
        }),
        contactPages: PropTypes.object,
        genericPages: PropTypes.object
    })
};

export default TemplateWrapper

export const pageQuery = graphql`
    query PageQuery {
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
        # get all contact-page
        contactPages: allMarkdownRemark (
            filter: {
                frontmatter: {
                    templateKey: {eq: "contact-page"}
                }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        email
                        telephone
                        address
                    }
                }
            }
        }
    }
`;
