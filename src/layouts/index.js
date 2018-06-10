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
        const { children } = this.props;
        const pages = this.props.data.allMarkdownRemark.edges;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = this.props.data.site.siteMetadata.description;
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children()}
                    {pages
                        .filter(theme => theme.node.frontmatter.templateKey === 'contact-page')
                        .map(({ node: theme }) => (
                            <Contact
                                key={theme.id}
                                email={theme.frontmatter.email}
                                telephone={theme.frontmatter.telephone}
                                address={theme.frontmatter.address} />
                        ))
                        .pop()}
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
                <ScrollToTop style={{'z-index': '100'}} showUnder={160}>
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
        })
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
        # get all contact-page
        allMarkdownRemark  (
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
                        templateKey
                        email
                        telephone
                        address
                    }
                }
            }
        }
    }
`;
