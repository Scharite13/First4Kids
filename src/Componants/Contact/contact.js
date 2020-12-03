import React from 'react';
import './contact.styles.css';

const Contact = () => (
    <div>
        <form className="contact-form" id="contact-form" method="post" action="contact.php">
            <label for="name">Name:</label><br></br>
            <input type="text" id="name" name="name" placeholder="Name"/><br></br>
            <label for="email">E-mail:</label><br></br>
            <input type="email" id="email" name="email" placeholder="JohnDoe@email.com"/><br></br>
            <label for="phone">Phone:</label><br></br>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><br></br>
            <label for="message">Message:</label><br></br>
            <textarea name="message" rows="4" cols="35" id="comment"></textarea><br></br>
            <button type="submit" action="blank email">Submit</button>
        </form>
    </div>
)

export default Contact;