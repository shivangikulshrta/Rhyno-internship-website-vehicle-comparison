import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import RotatingText from './RotatingText';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = ["Elegance", "Minimalism", "Comfort"];
  const galleryItems = [
    "images/usp1.jpg",
    "images/Firefly Ev scooter tyre remove bg 25485.jpg",
    "images/Range prediction.png",
    "images/Extraordinary Experience.jpg",
    "images/Rugged and simple Design.png"
  ];

  return (
    <Container>
      <HeroSection>
        <FrontLine>
          Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets{' '}
          <RotatingText words={words} />
        </FrontLine>
      </HeroSection>

      <VehiclePhotosContainer>
        <VehiclePhotos>
          <VehicleImage src='images/bike1.jpg' alt='Bike 1' />
          <VehicleImage src='images/bike2.png' alt='Bike 2' />
          <VehicleImage src='images/Extraordinary Experience.jpg' alt='Bike 3' />
        </VehiclePhotos>
      </VehiclePhotosContainer>

      <ProductButtons>
        <ProductButton onClick={() => navigate('/Product1')}>Check Out SE03 Lite</ProductButton>
        <ProductButton onClick={() => navigate('/Product2')}>Check Out SE03</ProductButton>
        <ProductButton onClick={() => navigate('/Product3')}>Check Out SE03 Max</ProductButton>
      </ProductButtons>

      <GallerySection>
        <Carousel fade activeIndex={currentIndex} onSelect={(index) => setCurrentIndex(index)}>
          {galleryItems.map((src, index) => (
            <Carousel.Item key={index}>
              <CarouselImage className="d-block w-100" src={src} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <GalleryControls>
          <ControlButton className="gallery-controls-previous" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)}>Previous</ControlButton>
          <ControlButton className="gallery-controls-next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)}>Next</ControlButton>
        </GalleryControls>
      </GallerySection>

      <FloatingButton onClick={() => navigate('/PreBook')}>Pre-book Now</FloatingButton>
    </Container>
  );
};

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components with Animations
const Container = styled.div`
  font-family: ${props => props.theme.fonts.lato};
  color: ${props => props.theme.colors.white};
  background: linear-gradient(180deg, ${props => props.theme.colors.black} 0%, ${props => props.theme.colors.darkGrey} 100%);
  animation: ${fadeIn} 1s ease-in;
`;

const HeroSection = styled.section`
  padding: 50px;
  text-align: center;
  background: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.yellow};
  animation: ${slideUp} 1s ease-out;
`;

const FrontLine = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.yellow};
  background: linear-gradient(90deg, ${props => props.theme.colors.yellow}, ${props => props.theme.colors.white});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const VehiclePhotosContainer = styled.section`
  padding: 40px;
  text-align: center;
  background: ${props => props.theme.colors.black};
`;

const VehiclePhotos = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VehicleImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ProductButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  margin-bottom: 40px;
  background: ${props => props.theme.colors.darkGrey};
`;

const ProductButton = styled.button`
  padding: 15px 25px;
  font-size: 1.5rem;
  margin: 10px;
  background-color: ${props => props.theme.colors.yellow};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 10px 20px;
  }
`;

const GallerySection = styled.section`
  padding: 50px;
  background: ${props => props.theme.colors.black};
  position: relative;
`;

const CarouselImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  border-radius: 15px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const GalleryControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  padding: 0 20px;
`;

const ControlButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 10px;
  color: ${props => props.theme.colors.white};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }

  &.gallery-controls-previous::before {
    border: solid ${props => props.theme.colors.white};
    border-width: 0 5px 5px 0;
    content: '';
    display: inline-block;
    height: 15px;
    transform: rotate(135deg);
  }

  &.gallery-controls-next::before {
    border: solid ${props => props.theme.colors.white};
    border-width: 0 5px 5px 0;
    content: '';
    display: inline-block;
    height: 15px;
    transform: rotate(-45deg);
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${props => props.theme.colors.yellow};
  padding: 20px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

export default HomePage;
