import React from 'react'
import PropTypes from 'prop-types'
import BannerLanding from '../components/BannerLanding'
import Work from "../components/Work";
import { Component } from 'react';
import 'react-image-lightbox/style.css';
import remark from "remark";
import styleGuide from 'remark-preset-lint-markdown-style-guide';
import remarkHtml from 'remark-html';
import Helmet from 'react-helmet'

export class ThemePageTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    };

    componentDidMount() {
        // this library in normal import throw errors during compile for inside window declarations problems
        const lightbox = require('react-image-lightbox');
        this.Lightbox = lightbox.default;
    }

    parseMarkdown(md) {
        return remark()
            .use({
                settings: {commonmark: true}
            })
            .use(styleGuide)
            .use(remarkHtml)
            .processSync(md).toString();
    };

    handleClick(index) {
        this.setState({
            photoIndex: index,
            isOpen: true
        });
    };

    getDangerousHtml(descriptionMarkdown) {
        let content = null;
        if (descriptionMarkdown) {
            const html = this.parseMarkdown(descriptionMarkdown);
            content = (<div dangerouslySetInnerHTML={{ __html: html }} />)
        }
        return content;
    };

    render() {
        const { photoIndex, isOpen } = this.state;
        const Lightbox = this.Lightbox;
        const images = this.props.works.map((work) => {
            return {
                src: (typeof work.image !== 'string') ?  work.image.childImageSharp.sizes.src : work.image,
                title: work.title,
                description: work.description
            }
        });

        return (
            <div>
                <Helmet>
                    <title>{`${this.props.title} - ${this.props.siteTitle}`}</title>
                    <meta name="description" content={this.props.title} />
                </Helmet>

                <BannerLanding title={this.props.title} subtitle={this.props.subtitle} preview={this.props.preview} background={this.props.introImage}/>
                <div id="main">
                    <section id="two" className="spotlights">
                        {
                            this.props.works.map((work, index) => {
                                return (
                                    <Work key={ (typeof work.image !== 'string') ? work.image.childImageSharp.sizes.src : work.image}
                                          image={work.image}
                                          title={work.title}
                                          description={this.parseMarkdown(work.description)}
                                          onClick={() => this.handleClick(index)}
                                    />
                                )
                            })
                        }
                        <div>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex].src}
                                    nextSrc={images[(photoIndex + 1) % images.length].src}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                                    discourageDownloads={true}
                                    enableZoom={false}
                                    animationOnKeyInput={true}
                                    imageTitle={images[photoIndex].title}
                                    imageCaption={this.getDangerousHtml(images[photoIndex].description)}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

ThemePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    introImage: PropTypes.string,
    works: PropTypes.array,
    siteTitle: PropTypes.string,
    preview: PropTypes.bool
};

const ThemePage = ({ data: { site, themePage } }) => {
    const siteTitle = site.siteMetadata.title;
    return (
        <ThemePageTemplate
          title={themePage.frontmatter.title}
          subtitle={themePage.frontmatter.subtitle}
          introImage={themePage.frontmatter.intro_image.childImageSharp.sizes.src}
          works={themePage.frontmatter.works}
          siteTitle={siteTitle}
        />
    )
};

ThemePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default ThemePage

export const pageQuery = graphql`
    query ThemePageByID($id: String!) {
        # site info
        site {
            siteMetadata {
                title
                description
            }
        }
        # get theme page
        themePage: markdownRemark(id: { eq: $id }) {
            id
            html 
            frontmatter {
                title
                subtitle
                intro_image {
                    childImageSharp{
                        sizes(maxWidth: 800) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
                works {
                    image {
                        childImageSharp{
                            sizes(maxWidth: 800) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                    title
                    description  
                }
            }
        }
    }
`;
