// PreBook.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './Header';
import Footer from './Footer';

const PreBook = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        
        <MainContent>
          <Title>Pre-Book Your Vehicle</Title>
          <Description>
            Secure your Rhyno vehicle today with our pre-booking feature. Choose your vehicle model, select your color, and complete your booking with a seamless payment process.
          </Description>
          <BookingForm>
            <Label htmlFor="model">Select Model:</Label>
            <Select id="model" name="model">
              <option value="se03-lite">SE03 Lite</option>
              <option value="se03">SE03</option>
              <option value="se03-max">SE03 Max</option>
            </Select>
            <Label htmlFor="color">Select Color:</Label>
            <Select id="color" name="color">
              <option value="yellow">Yellow</option>
              <option value="grey">Grey</option>
              {/* Add more color options if needed */}
            </Select>
            <Label htmlFor="payment">Payment Details:</Label>
            <PaymentInput type="text" id="payment" name="payment" placeholder="Enter payment information" />
            <SubmitButton>Complete Booking</SubmitButton>
          </BookingForm>
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

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 5px;
  align-self: flex-start;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.white};
`;

const PaymentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.white};
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.black};
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
`;

export default PreBook;
