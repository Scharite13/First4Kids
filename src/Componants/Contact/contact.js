import React from 'react';
import './contact.styles.css';

const Contact = () => (
    <div>
        <form className="contact-form" id="contact-form" method="post" action="email: dms121691@gmail.com">
            <label for="name">Name:</label><br></br>
            <input type="text" id="name" name="name" placeholder="Name"/><br></br>
            <label for="address">Address:</label><br></br>
            <input type="text" id="address" name="address" placeholder="123 Main St."/><br></br>
            <label for="city">City:</label><br></br>
            <input type="text" id="City" name="city" placeholder="Metro"/><br></br>
            <label for="state">State:</label><br></br>
            <select name="statefield" id="statefield"><br></br>
	            <option value="Alabama">Alabama</option>
	            <option value="Alaska">Alaska</option>
	            <option value="Arkansas">Arkansas</option>
	            <option value="Arizona">Arizona</option>
	            <option value="California">California</option>
	            <option value="Colorado">Colorado</option>
	            <option value="Connecticut">Connecticut</option>
	            <option value="Washington DC">Washington DC</option>
	            <option value="Delaware">Delaware</option>
	            <option selected="selected" value="Florida">Florida</option>
	            <option value="Georgia">Georgia</option>
	            <option value="Hawaii">Hawaii</option>
	            <option value="Idaho">Idaho</option>
	            <option value="Indiana">Indiana</option>
	            <option value="Illinois">Illinois</option>
	            <option value="Iowa">Iowa</option>
	            <option value="Kansas">Kansas</option>
	            <option value="Kentucky">Kentucky</option>
	            <option value="Louisiana">Louisiana</option>
	            <option value="Massachusetts">Massachusetts</option>
	            <option value="Maryland">Maryland</option>
	            <option value="Maine">Maine</option>
	            <option value="Michigan">Michigan</option>
	            <option value="Minnesota">Minnesota</option>
	            <option value="Missouri">Missouri</option>
	            <option value="Mississippi">Mississippi</option>
	            <option value="Montana">Montana</option>
	            <option value="North Carolina">North Carolina</option>
	            <option value="North Dakota">North Dakota</option>
	            <option value="Nebraska">Nebraska</option>
	            <option value="New Hampshire">New Hampshire</option>
	            <option value="New Jersey">New Jersey</option>
	            <option value="New Mexico">New Mexico</option>
	            <option value="Nevada">Nevada</option>
	            <option value="New York">New York</option>
	            <option value="Ohio">Ohio</option>
	            <option value="Oklahoma">Oklahoma</option>
	            <option value="Oregon">Oregon</option>
	            <option value="Pennsylvania">Pennsylvania</option>
	            <option value="Rhode Island">Rhode Island</option>
	            <option value="South Carolina">South Carolina</option>
	            <option value="South Dakota">South Dakota</option>
	            <option value="Tennessee">Tennessee</option>
	            <option value="Texas">Texas</option>
	            <option value="Utah">Utah</option>
	            <option value="Virginia">Virginia</option>
	            <option value="Vermont">Vermont</option>
	            <option value="Washington">Washington</option>
	            <option value="Wisconsin">Wisconsin</option>
	            <option value="West Virginia">West Virginia</option>
	            <option value="Wyoming">Wyoming</option>
            </select><br></br>
            <label for="zipcode">Zip Code:</label><br></br>
            <input type="text" id="zipcode" name="zipcode" placeholder="12345"/><br></br>
            <label for="email">E-mail:</label><br></br>
            <input type="email" id="email" name="email" placeholder="JohnDoe@email.com"/><br></br>
            <label for="phone">Phone:</label><br></br>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><br></br>
            <label for="comment">Comment:</label><br></br>
            <textarea name="comment" rows="4" cols="35" id="comment"></textarea><br></br>
            <button type="submit" action="blank emai">Submit</button>
        </form>
    </div>
)

export default Contact;