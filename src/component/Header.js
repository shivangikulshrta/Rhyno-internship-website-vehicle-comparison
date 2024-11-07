import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer>
        <Link to="/Home-Page">
        <Logo src="/images/Logo.png" alt="Company Logo" />
      </Link>
      <Nav>
        <NavLinks>
          <NavItem><Link to="/Home-Page">Home</Link></NavItem>
          <NavItem><Link to="/About-Us">About Us</Link></NavItem>
          <NavItem>
            <Dropdown>
              <Link to="#">Products</Link>
              <DropdownContent>
                <DropdownItem><Link to="/product1">SE03 Lite</Link></DropdownItem>
                <DropdownItem><Link to="/product2">SE03</Link></DropdownItem>
                <DropdownItem><Link to="/product3">SE03 Max</Link></DropdownItem>
                <DropdownItem><Link to="/Compare-All">Compare All</Link></DropdownItem>
              </DropdownContent>
            </Dropdown>
          </NavItem>
          <NavItem><Link to="/Contact-Us">Contact Us</Link></NavItem>
          <NavItem><Link to="/pre-book">Pre-book Now</Link></NavItem>
        </NavLinks>
        <SocialIcons>
          <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </SocialIcons>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.black};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 90px; /* Adjust as needed */
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 20px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.colors.darkGrey};
  min-width: 160px;
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  padding: 10px;
  a {
    color: ${props => props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

const SocialIcons = styled.div`
  a {
    color: ${props => props.theme.colors.white};
    margin-left: 20px;
    font-size: 1.8rem;
    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

export default Header;
