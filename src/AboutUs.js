import React from 'react';  
import styled, { ThemeProvider, keyframes } from 'styled-components';  
import { theme } from './theme'; // Ensure this path is correct  
import Header from './Header';  
import Footer from './Footer';  

const AboutUs = () => {  
  return (  
    <ThemeProvider theme={theme}>  
      <Container>  
        <Header />  
        <MainContent>  
          <Title>About Us</Title>  
          <Text>  
            Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.  
          </Text>  
          <Text>  
            With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.  
          </Text>  
        </MainContent>  
        <Footer />  
      </Container>  
    </ThemeProvider>  
  );  
};  

// Styled Components  
const fadeInBackground = keyframes`  
  from {  
    opacity: 0;  
  }  
  to {  
    opacity: 1;  
  }  
`;  

const flipDown = keyframes`  
  from {  
    opacity: 0;  
    transform: rotateX(-90deg);  
  }  
  to {  
    opacity: 1;  
    transform: rotateX(0);  
  }  
`;  

const zoomOut = keyframes`  
  from {  
    opacity: 0;  
    transform: scale(0);  
  }  
  to {  
    opacity: 1;  
    transform: scale(1);  
  }  
`;  

const Container = styled.div`  
  font-family: ${props => props.theme.fonts.lato};  
  color: ${props => props.theme.colors.white};  
  position: relative;  
  overflow: hidden;  

  &:before {  
    content: '';  
    position: absolute;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background-image: url('/images/bike1.jpg');  
    background-size: cover;  
    background-position: center;  
    opacity: 0.5;  
    animation: ${fadeInBackground} 1s ease-in-out;  
    z-index: -1;  
  }  
`;  

const MainContent = styled.div`  
  padding: 50px;  
  max-width: 800px;  
  margin: 0 auto;  
  text-align: center;  
  background: rgba(0, 0, 0, 0.6);  
  border-radius: 15px;  
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);  
  backdrop-filter: blur(10px);  
  position: relative;  

  @media (max-width: 768px) {  
    padding: 20px;  
  }  
`;  

const Title = styled.h1`  
  font-family: ${props => props.theme.fonts.poppins};  
  font-size: 2.5rem;  
  margin-bottom: 20px;  
  color: ${props => props.theme.colors.yellow};  
  animation: ${flipDown} 1s ease-in-out;  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);  
`;  

const Text = styled.p`  
  font-family: ${props => props.theme.fonts.calibri};  
  font-size: 1.2rem;  
  line-height: 1.6;  
  margin-bottom: 20px;  
  color: ${props => props.theme.colors.white};  
  animation: ${zoomOut} 1s ease-in-out;  
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;  
  padding: 10px;  
  border-radius: 10px;  
  
  &:hover {  
    background-color: ${props => props.theme.colors.yellow};  
    color: ${props => props.theme.colors.darkGrey};  
    transform: scale(1.05);  
  }  

  @media (max-width: 768px) {  
    font-size: 1rem;  
  }  
`;  

export default AboutUs;  