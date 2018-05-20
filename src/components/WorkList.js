import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Content from "./Content";
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

const WorkList = ({ listItems }) => {

    // const convertToHtml = (md) => {
    //     return remark()
    //         .use(recommended)
    //         .use(remarkHtml)
    //         .processSync(md).toString();
    // }

    return (
        listItems.map(item => (
            <Fragment key={item.title}>
                <section>
                    <a className="image">
                        <img src={item.image} alt={item.title} />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>{item.title}</h3>
                            </header>
                            <Content className="inner" content={item.description} />
                            {/*<Content className="inner" content={convertToHtml(item.description)} />*/}
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
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    })
  ),
}

export default WorkList
