import './Contact.css'
import React from 'react';
import ReactDOM from 'react-dom';

//import JqxButton from 'jqwidgets-scripts';

const Contact = () => {
    return (
    
      <div className="contact-container">
        <h1><center>Contact info</center></h1>
        <h3>Customer Support:</h3>
        <p>Email: support@carecrafter.com <br />
Phone: 080 123456790<br />
</p>

<center>We strive to respond to all inquiries within 24 hours. For urgent matters, please use our phone support for immediate assistance.</center>
<br />
<br />
<h3>Connect with Us:</h3>
<br />
<p>Follow us on social media for the latest updates and health tips!</p>

<br />

<p>
<b>Facebook:</b> [facebook.com/CareCrafter]<br />
<b>Twitter:</b> [@CareCrafterHQ]<br />
<b>Instagram:</b> [@carecrafter_official]<br />
Thank you for choosing CareCrafter for your healthcare needs!<br /></p>


      </div>
    
    );
  };

export default Contact;