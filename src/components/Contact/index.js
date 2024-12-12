import React, { useState } from 'react';
import {
  ContactSection,
  ContactWrapper,
  FormContainer,
  Form,
  InputField,
  TextArea,
  SubmitButton,
  SummaryContainer,
} from './styles';
import EarthBG from '../../assets/earth.jpg'

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example Formspree POST logic
    try {
      const response = await fetch('https://formspree.io/f/ralphaeloshun@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        setResponseMessage('Thank you! Your message has been sent.');
        setFormSubmitted(true);
        e.target.reset();
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        setResponseMessage('Oops! Something went wrong. Please try again.');
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      setResponseMessage('Error: Unable to send message. Please try again.');
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <ContactSection background ={EarthBG} id="contact" >
      <ContactWrapper>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <InputField type="text" name="name" placeholder="Your Name" required />
            <InputField type="email" name="email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
            {formSubmitted && <p className="response-message">{responseMessage}</p>}
          </Form>
        </FormContainer>
        <SummaryContainer>
          <h2>Get in touch</h2>
          <h4>   Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.</h4>
        </SummaryContainer>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;
