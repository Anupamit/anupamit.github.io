import React from 'react'
import '../Styles/Contact.css'

function Contact() {
    return (
        <div className="contact" id='contactNav'>
            <div className="awesome">
                <a
                    className='contact-tag'
                    href="https://twitter.com/anupamkrai011">
                    <i className="fa-contact fa fa-twitter fa-4x" aria-hidden="true"></i>
                </a>
                <a
                    className='contact-tag'
                    href="https://github.com/Anupamit">
                    <i className="fa-contact fa fa-github-alt fa-4x" aria-hidden="true"></i>
                </a>
                <a
                    href="mailto:anupamit011@gmail.com">
                        <i className="fa-contact fa fa-envelope-o fa-4x" aria-hidden="true"></i>
                    </a>
                <a
                    className='contact-tag'
                    href="https://www.linkedin.com/in/anupamit/">
                    <i className="fa-contact fa fa-linkedin fa-4x" aria-hidden="true"></i>
                </a>
            </div>
	    </div>
    )
}

export default Contact