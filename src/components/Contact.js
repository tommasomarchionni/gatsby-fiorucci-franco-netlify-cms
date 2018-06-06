import React from 'react'
import PropTypes from "prop-types";

const Contact = ({
    email,
    telephone,
    address,
}) => (
    <section id="contact">
        <hr/>
        <div className="inner">
            <section>
                <form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <div className="field half first">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Messaggio</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Invia" className="special" /></li>
                        <li><input type="reset" value="Pulisci" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">{email}</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefono</h3>
                        <span>{telephone}</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Indirizzo</h3>
                        {address}
                    </div>
                </section>
            </section>
        </div>
    </section>
)

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
}

export default Contact
