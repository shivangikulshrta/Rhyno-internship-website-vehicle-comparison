// AboutUs.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme'; // Ensure this path is correct
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
         {/* Ensure Header is functional */}
        
        <MainContent>
          <Title>About Us</Title>
          <Text>
            Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
          </Text>
          <Text>
            With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.
          </Text>
        </MainContent>
        
         {/* Ensure Footer is functional */}
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

const Text = styled.p`
  font-family: ${props => props.theme.fonts.calibri};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.white};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default AboutUs;
