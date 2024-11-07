// Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink><Link to="/privacy-policy">Privacy Policy</Link></FooterLink>
        <FooterLink><Link to="/refund-policy">Refund Policy</Link></FooterLink>
        <FooterLink><Link to="/website-policy">Website Policy</Link></FooterLink>
      
      </FooterLinks>
      <SocialIcons>
        <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.black};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: auto; /* Ensures the footer stays at the bottom if there is not enough content */
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterLink = styled.div`
  margin: 0 15px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  a {
    color: ${props => props.theme.colors.white};
    margin-left: 15px;
    font-size: 1.5rem;
    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

export default Footer;
