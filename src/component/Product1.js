  // Product1.js
  import React from 'react';
  import styled, { ThemeProvider } from 'styled-components';
  import { theme } from './theme';
  import Header from './Header';
  import Footer from './Footer';
  import { useNavigate } from 'react-router-dom';

  const Product1 = () => {
    const navigate = useNavigate();
    return (  
      <ThemeProvider theme={theme}>
        <Container>
          
          <MainContent>
            <VehicleImage src="images\bike1.jpg" alt="SE03 Lite" />
            <ProductDetails>
              <Title>Rhyno SE03 Lite</Title>
              <Text>Indulge in perfect harmony of power and range with this Rhyno. Offering an experience with its novel 1500W motor, it ensures a thrilling ride while still delivering a stable performance.</Text>
              <Specifications>
                <Spec><strong>Battery:</strong> 1.8Kwh</Spec>
                <Spec><strong>Max range (@30km/h):</strong> 100 km</Spec>
                <Spec><strong>Motor:</strong> 1500W</Spec>
                <Spec><strong>Charging time:</strong> 3 hours (12A)</Spec>
                <Spec><strong>Battery warranty:</strong> 3 Years</Spec>
                <Spec><strong>Max speed:</strong> 50 km/hr</Spec>
                <Spec><strong>Max range (@full speed):</strong> 60 km</Spec>
                <Spec><strong>Max range (@45km/h):</strong> 90 km</Spec>
              </Specifications>
              <KeyBenefits>
                <h3>Other Key Benefits</h3>
                <ul>
                  <li>Fire-safe battery</li>
                  <li>Range prediction</li>
                  <li>Comfortable and safe ride</li>
                  <li>LFP battery with 1500 cycles</li>
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

  export default Product1;
