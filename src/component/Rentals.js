// Rentals.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Assuming you have a theme.js file
import Header from './Header';
import Footer from './Footer';

const Rentals = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        
        <MainContent>
          <Title>Rentals</Title>
          <TextContent>
            <p>At Rhyno, we offer flexible and convenient rental solutions for our electric scooters, tailored to meet your needs whether for short-term or long-term use. Our rental service provides a hassle-free way to experience the exceptional performance and innovation of our vehicles without the commitment of ownership.</p>
            <p>Our rental options are ideal for tourists exploring vibrant locations like Goa, fleet operators needing reliable transportation solutions, and anyone seeking an eco-friendly and efficient mode of travel. Enjoy the benefits of our high-quality electric scooters with the added flexibility of a rental plan.</p>
            <p>For more information on rental plans, availability, and pricing, please contact us at <a href="mailto:info@rhyno.in">info@rhyno.in</a> or call us at +91-9023987528.</p>
          </TextContent>
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

const TextContent = styled.div`
  text-align: left;
  font-family: ${props => props.theme.fonts.calibri};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 20px;
  color: ${props => props.theme.colors.white};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  a {
    color: ${props => props.theme.colors.yellow};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Rentals;
