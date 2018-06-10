import React from 'react'
import PropTypes from 'prop-types'
import BannerLanding from '../components/BannerLanding'
import Work from "../components/Work";
import { Component } from 'react';
import 'react-image-lightbox/style.css';
import remark from "remark";
import styleGuide from 'remark-preset-lint-markdown-style-guide';
import remarkHtml from 'remark-html';

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
                src: work.image.childImageSharp.sizes.src,
                title: work.title,
                description: work.description
            }
        });

        return (
            <div>
                <BannerLanding title={this.props.title} subtitle={this.props.subtitle}/>
                <div id="main">
                    <section id="two" className="spotlights">
                        {
                            this.props.works.map((work, index) => {
                                return (
                                    <Work key={work.title + work.image}
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
};

ThemePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

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
