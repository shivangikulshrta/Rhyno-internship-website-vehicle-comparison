// Product2.js  
import React from 'react';  
import styled, { ThemeProvider } from 'styled-components';  
import { theme } from './theme';  
import Header from './Header';  
import Footer from './Footer';  
import { useNavigate } from 'react-router-dom';  

const Product2 = () => {  
    const navigate = useNavigate();  

  return (  
    <ThemeProvider theme={theme}>  
      <Container>  
        <MainContent>  
          <VehicleImage src="images/bike2.png" alt="SE03" />  
          <ProductDetails>  
            <Title>Rhyno SE03</Title>  
            <Text>  
              Discover the perfect blend of power and innovation with the Rhyno SE03. Equipped with advanced features and a powerful motor, it promises a thrilling ride while maintaining top-notch stability and safety.  
            </Text>  
            <Specifications>  
              <Spec><strong>Battery:</strong> 2.0Kwh</Spec>  
              <Spec><strong>Max range (@30km/h):</strong> 120 km</Spec>  
              <Spec><strong>Motor:</strong> 2000W</Spec>  
              <Spec><strong>Charging time:</strong> 4 hours (12A)</Spec>  
              <Spec><strong>Battery warranty:</strong> 3 Years</Spec>  
              <Spec><strong>Max speed:</strong> 60 km/hr</Spec>  
              <Spec><strong>Max range (@full speed):</strong> 70 km</Spec>  
              <Spec><strong>Max range (@45km/h):</strong> 100 km</Spec>  
            </Specifications>  
            <KeyBenefits>  
              <h3>Other Key Benefits</h3>  
              <ul>  
                <li>High-performance motor</li>  
                <li>Extended range prediction</li>  
                <li>Enhanced ride comfort</li>  
                <li>LFP battery with 2000 cycles</li>  
                <li>Active Balancing</li>  
                <li>Waterproof (IP67)</li>  
              </ul>  
            </KeyBenefits>  
            <BuyNowButton onClick={() => navigate('/Pre-Book')}>Buy Now</BuyNowButton>  
          </ProductDetails>  
        </MainContent>  
        <Footer />  
      </Container>  
    </ThemeProvider>  
  );  
};  

// Styled Components  
const Container = styled.div`  
  font-family: ${props => props.theme.fonts.lato};  
  color: ${props => props.theme.colors.white};  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
`;  

const MainContent = styled.div`  
  padding: 50px;  
  text-align: center;  
  background-color: ${props => props.theme.colors.darkGrey};  
  border-radius: 10px;  
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);  
  transition: transform 0.3s ease, box-shadow 0.3s ease;  

  &:hover {  
      transform: translateY(-5px);  
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.7);  
  }  

  @media (max-width: 768px) {  
      padding: 30px;  
  }  
`;  

const VehicleImage = styled.img`  
  width: 100%;  
  max-width: 600px;  
  border-radius: 10px;  
  margin-bottom: 20px;  
  transition: transform 0.3s ease;  

  &:hover {  
      transform: scale(1.05);  
  }  
`;  

const ProductDetails = styled.div`  
  margin-top: 20px;  
  text-align: left;  
  animation: fadeIn 1s ease-in-out;  

  @keyframes fadeIn {  
      from {  
          opacity: 0;  
          transform: translateY(20px);  
      }  
      to {  
          opacity: 1;  
          transform: translateY(0);  
      }  
  }  
`;  

const Title = styled.h1`  
  font-size: 2.5rem;  
  margin-bottom: 10px;  
`;  

const Text = styled.p`  
  font-size: 1.2rem;  
  margin-bottom: 20px;  
`;  

const Specifications = styled.div`  
  margin-top: 20px;  
`;  

const Spec = styled.p`  
  font-size: 1.1rem;  
  margin: 5px 0;  
  transition: color 0.3s ease;  

  &:hover {  
    color: ${props => props.theme.colors.yellow};  
  }  
`;  

const KeyBenefits = styled.div`  
  margin-top: 20px;  

  h3 {  
    font-size: 1.5rem;  
    margin-bottom: 10px;  
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);  
  }  

  ul {  
    list-style-type: disc;  
    padding-left: 20px;  
    
    li {  
      margin-bottom: 5px;  
      transition: color 0.3s ease;  

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
  transition: background-color 0.3s ease, transform 0.3s ease;  

  &:hover {  
    background-color: ${props => props.theme.colors.orange};  
    transform: scale(1.05);  
  }  
`;  

export default Product2;