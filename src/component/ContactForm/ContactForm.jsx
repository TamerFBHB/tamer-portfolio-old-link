import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";
import { Container } from "react-bootstrap";

const ContactForm = () => {
  // **** apear alert when send mail****
  const  Alert =()=> {
    alert("Your message is send")
}
// **** this code to send message when click send input ****
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ud5dkct",
        "template_lzvvg4f",
        form.current,
        "iWyQCE4knWLge4c2A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    Alert();
  };
  return (
    <>
      <div className="sendEmail">
        <h3>Send Me Email</h3>
        
      <Container>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Your Name</label>
              <input type="text" name="user_name" />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" name="user_email" />
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" cols="45" rows="5" />
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
