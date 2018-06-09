import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { HTMLContent } from "./Content";
import remark from 'remark';
import styleGuide from 'remark-preset-lint-markdown-style-guide';
import remarkHtml from 'remark-html';
import Img from "gatsby-image";

const WorkList = ({ listItems }) => {

    const parseMarkdown = (md) => {
        return remark()
            .use({
                settings: {commonmark: true}
            })
            .use(styleGuide)
            .use(remarkHtml)
            .processSync(md).toString();
    }

    return (
        listItems.map(item => (
            <Fragment key={item.title + item.image}>
                <section>
                    <a className="image">
                        <Img
                            sizes={item.image.childImageSharp.sizes}
                            alt={item.title}

                        />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major inline-flex">
                                <h3>{item.title}</h3>
                            </header>
                            <HTMLContent className="inner" content={parseMarkdown(item.description)} />
                        </div>
                    </div>
                </section>
            </Fragment>
        ))
    )
}

WorkList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
        image: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    })
  ),
}

export default WorkList
