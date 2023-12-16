import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";
import { Container } from "react-bootstrap";

const ContactForm = () => {
  // **** apear alert when send mail****
  const  Alert =()=> {
    alert("your message is send")
}
// **** this code to send message when click send input ****
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm( "service_ud5dkct", "template_lzvvg4f",form.current, "iWyQCE4knWLge4c2A" )
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    Alert();
};
    

  return (
    <>
      <div className="sendEmail">
        <h3>Send Me Email</h3>
        
      <Container>
          <form ref={form} onSubmit={sendEmail} >
            <div>
              <label id="name">Your Name</label>
              <input type="text" name="user_name"  id="tamer" required />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" name="user_email" id="mail" required/>
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" cols="45" rows="5" id="message" required/>
            </div>
          <div className="btnSend">
              <div className="send "  >
                <input type="submit" value="send" className="submit "/>            
                <i class="bi bi-send-fill"></i>
              </div>
          </div>
        
          </form>
      </Container>
      </div>
    </>
  );
};

export default ContactForm;
