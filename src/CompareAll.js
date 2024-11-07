import React from 'react';  
import styled, { ThemeProvider } from 'styled-components';  
import { theme } from './theme'; // Assuming you have a theme.js file  
import { useNavigate } from 'react-router-dom'; // Import useNavigate  

const CompareAll = () => {  
  const navigate = useNavigate(); // Initialize useNavigate  

  const handleBuyNowClick = () => {  
    navigate('/pre-book'); // Navigate programmatically  
  };  

  return (  
    <ThemeProvider theme={theme}>  
      <Container>  
        <MainContent>  
          <Title>Compare All Models</Title>  
          <ComparisonTable>  
            <TableHeader>  
              <tr>  
                <th>Specification</th>  
                <th>Rhyno SE03 Lite</th>  
                <th>Rhyno SE03</th>  
                <th>Rhyno SE03 Max</th>  
              </tr>  
            </TableHeader>  
            <TableBody>  
              <TableRow>  
                <td>Battery</td>  
                <td>1.8Kwh</td>  
                <td>2.7Kwh</td>  
                <td>2.7Kwh</td>  
              </TableRow>  
              <TableRow>  
                <td>Battery Features</td>  
                <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>  
                <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>  
                <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>  
              </TableRow>  
              <TableRow>  
                <td>Battery Warranty</td>  
                <td>3 years</td>  
                <td>3 years</td>  
                <td>3 years</td>  
              </TableRow>  
              <TableRow>  
                <td>Charging Time</td>  
                <td>3 hours (12A)</td>  
                <td>4 hours (12A)</td>  
                <td>4 hours (12A)</td>  
              </TableRow>  
              <TableRow>  
                <td>Motor</td>  
                <td>1500W</td>  
                <td>1500W</td>  
                <td>2000W</td>  
              </TableRow>  
              <TableRow>  
                <td>Max Speed</td>  
                <td>55 km/h</td>  
                <td>55 km/h</td>  
                <td>65 km/h</td>  
              </TableRow>  
              <TableRow>  
                <td>Warranty on Electronics</td>  
                <td>1 year</td>  
                <td>1 year</td>  
                <td>1 year</td>  
              </TableRow>  
              <TableRow>  
                <td>Max Range (@30km/h)</td>  
                <td>100 km</td>  
                <td>150 km</td>  
                <td>120 km</td>  
              </TableRow>  
              <TableRow>  
                <td>Max Range (@45km/h)</td>  
                <td>90 km</td>  
                <td>110 km</td>  
                <td>100 km</td>  
              </TableRow>  
              <TableRow>  
                <td>Max Range (@Full Speed)</td>  
                <td>60 km</td>  
                <td>90 km</td>  
                <td>80 km</td>  
              </TableRow>  
              <TableRow>  
                <td>Other Key Benefits</td>  
                <td>Fire-safe Battery<br />Range Prediction<br />Comfortable Ride<br />Stable and Safe</td>  
                <td>Fire-safe Battery<br />Range Prediction<br />Comfortable Ride<br />Stable and Safe</td>  
                <td>Fire-safe Battery<br />Range Prediction<br />Comfortable Ride<br />Stable and Safe</td>  
              </TableRow>  
            </TableBody>  
          </ComparisonTable>  
          <BuyNowButton onClick={handleBuyNowClick}>Buy Now</BuyNowButton>  
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
  min-height: 100vh;  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
`;  

const MainContent = styled.div`  
  padding: 50px;  
  text-align: center;  
  max-width: 1200px;  
  margin: 20px;  
  background: rgba(0, 0, 0, 0.8);  
  border-radius: 12px;  
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);  
  transition: transform 0.3s ease, box-shadow 0.3s ease;  

  &:hover {  
    transform: translateY(-5px);  
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.7);  
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
  animation: fadeIn 1s ease-in-out;  

  @keyframes fadeIn {  
    from {  
      opacity: 0;  
      transform: translateY(-20px);  
    }  
    to {  
      opacity: 1;  
      transform: translateY(0);  
    }  
  }  
`;  

const ComparisonTable = styled.div`  
  display: table;  
  width: 100%;  
  margin: 20px 0;  
  border-spacing: 0;  
`;  

const TableHeader = styled.div`  
  display: table-header-group;  
  font-family: ${props => props.theme.fonts.poppins};  
  background-color: ${props => props.theme.colors.black};  
  color: ${props => props.theme.colors.white};  

  th {  
    padding: 15px;  
    text-align: left;  
    font-size: 1.2rem;  

    &:first-child {  
      width: 30%;  
    }  
  }  
`;  

const TableBody = styled.div`  
  display: table-row-group;  
`;  

const TableRow = styled.div`  
  display: table-row;  
  background-color: ${props => props.theme.colors.darkGrey};  
  transition: background-color 0.3s ease;  

  &:nth-child(even) {  
    background-color: ${props => props.theme.colors.black};  
  }  

  &:hover {  
    background-color: ${props => props.theme.colors.yellow};  
    color: ${props => props.theme.colors.black};  
  }  

  td {  
    padding: 15px;  
    text-align: left;  
    font-size: 1rem;  
    color: ${props => props.theme.colors.white};  
    border-bottom: 1px solid ${props => props.theme.colors.darkGrey};  
    transition: transform 0.3s ease;  

    &:hover {  
      transform: scale(1.05);  
    }  
  }  
`;  

const BuyNowButton = styled.button`  
  background-color: ${props => props.theme.colors.yellow};  
  color: ${props => props.theme.colors.black};  
  border: none;  
  padding: 12px 24px;  
  font-size: 1.2rem;  
  margin-top: 20px;  
  cursor: pointer;  
  border-radius: 8px;  
  transition: background-color 0.3s ease, transform 0.3s ease;  

  &:hover {  
    background-color: ${props => props.theme.colors.orange};  
    transform: scale(1.05);  
  }  

  @media (max-width: 768px) {  
    font-size: 1rem;  
    padding: 10px 20px;  
  }  
`;  

export default CompareAll;