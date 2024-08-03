import React from 'react'
import './detail.css'
import  message_icon from '../../assets/message_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email_icon.png'

function Details () {
    return(
        <div className='contact'>
            <div className='contact-col'>
                <h3>Sand us a msg <img src={message_icon} alt=''/></h3>
                <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our community. </p>
                <ul>	
                    <li><img src={mail_icon} alt=''/>Contact@GreenGrace.dev</li>
                    <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
                    <li><img src={email_icon} alt=''/>greengrace@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Details