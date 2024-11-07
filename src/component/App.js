import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Rentals from './Rentals';
import CompareAll from './CompareAll';
import Product1 from './Product1';
import Product2 from './Product2';    
import Product3 from './Product3';
import PreBook from './PreBook';
import { theme } from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/home-page" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/compare-all" element={<CompareAll />} />
              <Route path="/product1" element={<Product1 />} />
              <Route path="/product2" element={<Product2 />} />
              <Route path="/product3" element={<Product3 />} />
              <Route path="/pre-book" element={<PreBook />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
`;

const MainContent = styled.main`
  flex: 1; /* This makes sure the main content expands to fill available space */
`;

export default App;
