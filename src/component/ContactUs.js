// ContactUs.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Assuming you have a theme.js file
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        
        <MainContent>
          <Title>Contact Us</Title>
          <ContactDetails>
            <Detail>
              <Label>Email:</Label> <Value>info@rhyno.in</Value>
            </Detail>
            <Detail>
              <Label>Mobile No.:</Label> <Value>+91-9023987528</Value>
            </Detail>
            <Detail>
              <Label>Location:</Label> <Value>Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</Value>
            </Detail>
          </ContactDetails>
        </MainContent>
        
      </Container>
    </ThemeProvider>
  );
};

// Styled Components
const Container = styled.div`
  font-family: ${props => props.theme.fonts.lato};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.darkGrey};
`;

const MainContent = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.yellow};
`;

const ContactDetails = styled.div`
  text-align: left;
  font-family: ${props => props.theme.fonts.calibri};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 20px;
  color: ${props => props.theme.colors.white};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Detail = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 5px;
`;

export default ContactUs;
