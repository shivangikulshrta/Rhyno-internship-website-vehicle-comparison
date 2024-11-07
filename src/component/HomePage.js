import React, { useState } from 'react';
import styled from 'styled-components';
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
          <img src='images/bike1.jpg' alt='Bike 1'/>
          <img src='images/bike2.png' alt='Bike 2'/>
          <img src='images/bike3.png' alt='Bike 3'/>
        </VehiclePhotos>
      </VehiclePhotosContainer>

      <ProductButtons>
        <button onClick={() => navigate('/Product1')}>Check Out SE03 Lite</button>
        <button onClick={() => navigate('/Product2')}>Check Out SE03</button>
        <button onClick={() => navigate('/Product3')}>Check Out SE03 Max</button>
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
          <button className="gallery-controls-previous" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)}>Previous</button>
          <button className="gallery-controls-next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)}>Next</button>
        </GalleryControls>
      </GallerySection>

      <FloatingButton onClick={() => navigate('/PreBook')}>Pre-book Now</FloatingButton>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: ${props => props.theme.fonts.lato};
  color: ${props => props.theme.colors.white};
`;

const HeroSection = styled.section`
  padding: 50px;
  text-align: center;
  background-color: ${props => props.theme.colors.darkGrey};
`;

const FrontLine = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.yellow};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const VehiclePhotosContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const VehiclePhotos = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  img {
    width: 350px;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 80%;
    }
  }
`;

const ProductButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    margin: 10px;
    background-color: ${props => props.theme.colors.yellow};
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 8px 16px;
    }
  }
`;

const GallerySection = styled.section`
  padding: 30px;
  background-color: ${props => props.theme.colors.black};
  position: relative;
`;

const CarouselImage = styled.img`
  max-height: 400px; /* Adjust this value as needed */
  object-fit: cover; /* Ensure the image covers the container */
`;

const GalleryControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  padding: 0 20px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    padding: 10px;
    color: ${props => props.theme.colors.white};

    &:focus {
      outline: none;
    }
  }

  .gallery-controls-previous::before {
    border: solid ${props => props.theme.colors.white};
    border-width: 0 5px 5px 0;
    content: '';
    display: inline-block;
    height: 15px;
    transform: rotate(135deg);
  }

  .gallery-controls-next::before {
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
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.15);

  &:hover {
    box-shadow: 0px 7px 15px rgba(0,0,0,0.25);
  }
`;

export default HomePage;
