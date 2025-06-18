import React from 'react'
import PropTypes from "prop-types";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FaEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import FaPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import FaHome from "@fortawesome/fontawesome-free-solid/faHome";
import FaCircle from "@fortawesome/fontawesome-free-solid/faCircle";

const Contact = ({
    email,
    telephone,
    address,
    cellular
}) => (
    <section id="contact">
        <hr/>
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <FontAwesomeIcon className="icon alt" transform={'shrink-10' } mask={FaCircle} icon={FaEnvelope} />
                        <h3>Email</h3>
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <FontAwesomeIcon className="icon alt" transform={'shrink-10 flip-h ' } mask={FaCircle} icon={FaPhone} />
                        <h3>Telefono</h3>
                        <div>{telephone}</div>
                        { cellular ? <div>{cellular}</div> : ''}
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <FontAwesomeIcon className="icon alt" transform={'shrink-10' } mask={FaCircle} icon={FaHome} />
                        <h3>Indirizzo</h3>
                        {address}
                    </div>
                </section>
            </section>
        </div>
    </section>
);

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    cellular: PropTypes.string,
    address: PropTypes.string.isRequired,
};

export default Contact
