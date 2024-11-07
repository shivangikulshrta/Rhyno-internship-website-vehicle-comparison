
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Assuming you have a theme.js file

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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MainContent = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.yellow};
  animation: slideIn 0.5s ease forwards;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  transition: transform 0.2s;

  &:hover {
    transform: translateX(5px);
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 5px;
`;

export default ContactUs;
