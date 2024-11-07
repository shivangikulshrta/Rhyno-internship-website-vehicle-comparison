// Product3.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Product3 = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        
        <MainContent>
          <VehicleImage src="images\bike3.png" alt="SE03 Max" />
          <ProductDetails>
            <Title>Rhyno SE03 Max</Title>
            <Text>Experience unparalleled performance with the Rhyno SE03 Max. Featuring an advanced motor and an extended range, it delivers a superior riding experience while ensuring safety and durability.</Text>
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
`;

const MainContent = styled.div`
  padding: 50px;
  text-align: center;
  background-color: ${props => props.theme.colors.darkGrey};
`;

const VehicleImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const ColorSelection = styled.div`
  margin: 20px 0;
`;

const ColorButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  cursor: pointer;
`;

const ProductDetails = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const Specifications = styled.div`
  margin-top: 20px;
`;

const Spec = styled.p`
  font-size: 1.1rem;
`;

const KeyBenefits = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;

    li {
      margin-bottom: 5px;
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
`;

export default Product3;
