import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Content from "./Content";

const WorkList = ({ listItems }) => (
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
                            <Content className="inner" content={item.subtitle} />
                        </div>
                    </div>
                </section>
            </Fragment>
        ))
)

WorkList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
    })
  ),
}

export default WorkList
