// Product3.js  
import React from 'react';  
import styled, { ThemeProvider, keyframes } from 'styled-components';  
import { theme } from './theme';  
import Header from './Header';  
import Footer from './Footer';  
import { useNavigate } from 'react-router-dom';  

// Keyframes for animations  
const fadeIn = keyframes`  
  from {  
    opacity: 0;  
    transform: translateY(20px);  
  }  
  to {  
    opacity: 1;  
    transform: translateY(0);  
  }  
`;  

const slideIn = keyframes`  
  from {  
    transform: translateX(-100%);  
  }  
  to {  
    transform: translateX(0);  
  }  
`;  

const Product3 = () => {  
  const navigate = useNavigate();  
  return (  
    <ThemeProvider theme={theme}>  
      <Container>  
        <MainContent>  
          <VehicleImage src="images/Extraordinary Experience.jpg" alt="SE03 Max" />  
          <ProductDetails>  
            <Title>{`Rhyno SE03 Max`}</Title>  
            <Text>{`Experience unparalleled performance with the Rhyno SE03 Max. Featuring an advanced motor and an extended range, it delivers a superior riding experience while ensuring safety and durability.`}</Text>  
            <Specifications>  
              <Spec><strong>Battery:</strong> 2.5Kwh</Spec>  
              <Spec><strong>Max range (@30km/h):</strong> 150 km</Spec>  
              <Spec><strong>Motor:</strong> 2500W</Spec>  
              <Spec><strong>Charging time:</strong> 5 hours (12A)</Spec>  
              <Spec><strong>Battery warranty:</strong> 3 Years</Spec>  
              <Spec><strong>Max speed:</strong> 70 km/hr</Spec>  
              <Spec><strong>Max range (@full speed):</strong> 80 km</Spec>  
              <Spec><strong>Max range (@45km/h):</strong> 120 km</Spec>  
            </Specifications>  
            <KeyBenefits>  
              <h3>Other Key Benefits</h3>  
              <ul>  
                <li>High-power motor for enhanced performance</li>  
                <li>Longer range for extended trips</li>  
                <li>Superior ride comfort and safety</li>  
                <li>LFP battery with 2000 cycles</li>  
                <li>Active Balancing</li>  
                <li>Waterproof (IP67)</li>  
              </ul>  
            </KeyBenefits>  
            <BuyNowButton onClick={() => navigate('/Pre-Book')}>Buy Now</BuyNowButton>  
          </ProductDetails>  
        </MainContent>  
      </Container>  
    </ThemeProvider>  
  );  
};  

// Styled Components  
const Container = styled.div`  
  font-family: ${props => props.theme.fonts.lato};  
  color: ${props => props.theme.colors.white};  
  animation: ${fadeIn} 0.5s ease-in-out;  
`;  

const MainContent = styled.div`  
  padding: 50px;  
  text-align: center;  
  background-color: ${props => props.theme.colors.darkGrey};  
  animation: ${slideIn} 0.7s ease forwards;  
  border-radius: 12px;  
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);  
`;  

const VehicleImage = styled.img`  
  width: 100%;  
  max-width: 600px;  
  margin-bottom: 20px;  
  border-radius: 12px;  
  transition: transform 0.3s;  

  &:hover {  
    transform: scale(1.05);  
  }  
`;  

const ProductDetails = styled.div`  
  margin-top: 20px;  
  text-align: left;  
`;  

const Title = styled.h1`  
  font-size: 2.5rem;  
  margin-bottom: 10px;  
  text-transform: uppercase;  
  letter-spacing: 1px;  
`;  

const Text = styled.p`  
  font-size: 1.2rem;  
  line-height: 1.5;  
  margin-bottom: 20px;  
`;  

const Specifications = styled.div`  
  margin-top: 20px;  
`;  

const Spec = styled.p`  
  font-size: 1.1rem;  
  margin: 5px 0;  
  transition: color 0.3s;  

  &:hover {  
    color: ${props => props.theme.colors.yellow};  
  }  
`;  

const KeyBenefits = styled.div`  
  margin-top: 20px;  

  h3 {  
    font-size: 1.5rem;  
    margin-bottom: 10px;  
    text-decoration: underline;  
  }  

  ul {  
    list-style-type: disc;  
    padding-left: 20px;  

    li {  
      margin-bottom: 5px;  
      transition: color 0.3s;  

      &:hover {  
        color: ${props => props.theme.colors.yellow};  
      }  
    }  
  }  
`;  

const BuyNowButton = styled.button`  
  background-color: ${props => props.theme.colors.yellow};  
  color: ${props => props.theme.colors.black};  
  border: none;  
  padding: 10px 20px;  
  font-size: 1.2rem;  
  margin-top: 20px;  
  cursor: pointer;  
  border-radius: 5px;  
  transition: background-color 0.3s, transform 0.2s;  

  &:hover {  
    background-color: ${props => props.theme.colors.white};  
    color: ${props => props.theme.colors.black};  
    transform: scale(1.05);  
  }  
`;  

export default Product3;