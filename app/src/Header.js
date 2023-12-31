import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import RegistrationForm from './RegistrationForm';
import corpart1 from './assets/corpart1.svg';
import spbstu from './assets/spbstu.png';
import fasie from './assets/fasie.png';
import Banner from './Banner';
import Footer from './Footer';
import './App.css';
import Landing from './pages/Landing';
import Customers from './pages/Customers';
import Signin from './pages/Signin';
import Products from './pages/Products';
import Resources from './pages/Resources';







const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  
  const handleHeaderHover = (item) => {
    setIsHovered(true);
  
    if (isClicked) {
      setIsClicked(false);
    }
  
    if (expandedSection !== item) {
      setExpandedSection(item);
    }
  };
  

  const handleHeaderLeave = () => {
    setIsHovered(false);
  };

  const handleHeaderClick = () => {
    setIsClicked(!isClicked);
  };

  const handleItemClick = (item) => {
    if (expandedSection === item) {
      setExpandedSection(null);
    } else {
      setExpandedSection(item);
    }
    setIsClicked(!isClicked); // Toggle isClicked state
  };

  const handleSectionLeave = () => {
    setExpandedSection(null);
  };

  return (
    <StyledHeader
      isHovered={isHovered}
      isClicked={isClicked}
      onMouseEnter={handleHeaderHover}
      onClick={handleHeaderClick}
    >
      <div>
        <div>
        <StyledCompanyLink
          onClick={() => handleItemClick('company')}
          selected={expandedSection === 'company'}
          onMouseEnter={() => handleHeaderHover('company')} // Add onMouseEnter event handler
        >
          Softa
        </StyledCompanyLink>

        <StyledLink
          onClick={() => handleItemClick('products')}
          selected={expandedSection === 'products'}
          onMouseEnter={() => handleHeaderHover('products')} // Add onMouseEnter event handler
        >
          Products
        </StyledLink>

        <StyledLink
          onClick={() => handleItemClick('customers')}
          selected={expandedSection === 'customers'}
          onMouseEnter={() => handleHeaderHover('customers')} // Add onMouseEnter event handler
        >
          Customers
        </StyledLink>

        <StyledLink
          onClick={() => handleItemClick('resources')}
          selected={expandedSection === 'resources'}
          onMouseEnter={() => handleHeaderHover('resources')} // Add onMouseEnter event handler
        >
          Resources
        </StyledLink>

        <StyledLink
          onClick={() => handleItemClick('about')}
          selected={expandedSection === 'about'}
          onMouseEnter={() => handleHeaderHover('about')} // Add onMouseEnter event handler
        >
          About
        </StyledLink>

        <StyledSignInLink
          onClick={() => handleItemClick('sign-in')}
          selected={expandedSection === 'sign-in'}
          onMouseEnter={() => handleHeaderHover('sign-in')} // Add onMouseEnter event handler
        >
          Sign In
        </StyledSignInLink>

        </div>
      </div>
      {expandedSection && (
        <ExpandedSection expanded={expandedSection}>
          {expandedSection === 'sign-in' && (
            <>
            <SigninExpandedContent>

              <Signin />

            </SigninExpandedContent>
            </>
          )}

          {expandedSection === 'company' && (
            <>
            <CompanyExpandedContent>
              <Landing />
            </CompanyExpandedContent>
            </>
          )}

          {expandedSection === 'products' && (
            <>
            <ProductsExpandedContent>
              <Products />
            </ProductsExpandedContent>
            </>
          )}

          {expandedSection === 'customers' && (
            <>
            <CustomersExpandedContent>
              <Customers />
            </CustomersExpandedContent>

            </>
          )}
          {expandedSection === 'resources' && (
            <>
            <ResourcesExpandedContent>
              <Resources />
            </ResourcesExpandedContent>

            </>
          )}
          {expandedSection === 'about' && (
            <>
            <AboutExpandedContent>
              <Banner />}
              <Customers />}


              <TextColumn>
                <img src={corpart1} alt="Corpart 1" />
              </TextColumn>

            </AboutExpandedContent>

            </>
          )}
          {/* Add other conditionally rendered components based on the expandedSection value */}
        </ExpandedSection>
      )}

    </StyledHeader>
  );
};



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ImageContainer = styled.div`
  max-width: 300px;
  margin-top: 40px;
  margin-left: 30px;

  &:hover {
    background-color: darkcyan;
    color: white;
  }
`;

const StyledHeader = styled.header`
  background-color: rgb(231, 231, 231);
  align-items: center;
  height: 40px;
  width: auto;
  padding: 20px 20px 40px 20px;
  transition: height 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isHovered }) => (isHovered ? 'rgb(243, 243, 243)' : 'rgb(243, 243, 243)')};
    transition: height 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    /* Styles for screens up to 768px */
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    
  }


  
`;

const StyledLogo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  color: darkcyan;
`;

const TextColumn = styled.div`
  font-size: 18px;
  padding: 20px;
  width: 300px;
  margin-right: 200px;
  color: red;
  //background-color: blue;
  margin-top: 20px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px */
    display: none; /* Hide the link container on smaller screens */
  }
`;


const StyledLink = styled.a`
  background-color: ${({ selected }) => (selected ? 'darkviolet' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'gray')};
  padding: 0px 16px;
  border: 2px solid ${({ selected }) => (selected ? 'black' : 'transparent')};
  box-shadow: ${({ selected }) => (selected ? '5px 5px 0px 0px rgba(0, 0, 0, 0.2);' : '0px 0px 0px 0px rgba(0, 0, 0, 0.2);')};
  border-radius: 0px;
  margin-right: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  

  &:hover {
    background-color: darkcyan;
    color: white;
  }

  @media (max-width: 768px) {
    /* Styles for screens up to 768px */
    display: block; /* Change display to block to stack the links */
    margin-right: 0;
    margin-bottom: 10px;
  }
};

const LinkContainer = ({ children }) => {
  return <StyledLinkContainer>{children}</StyledLinkContainer>;
};

export { LinkContainer, StyledLink };

`;

const StyledSignInLink = styled(StyledLink)`
  margin-left: auto;
  border: 1px solid darkviolet;
`;

const StyledCompanyLink = styled(StyledLink)`
  margin-left: auto;
  border: 1px solid darkcyan;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;

const ExpandedSection = styled.section`
  height: 800px;
  width: 99%;
  margin-top: 15px;
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  animation: ${({ expanded }) => (expanded ? fadeIn : fadeOut)} 0.3s ease-in-out;
  //border-top-left-radius: 0px;
  //border-left-color: red;
  transition: opacity 0.3s ease-in-out;
  //box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    /* Styles for screens up to 768px */
    height: 600px;
  }

  @media (max-width: 480px) {
    /* Styles for screens up to 480px */
    height: 400px;
  }

`;


const ExpandedContent = styled.section`
  display: flex;
  border-radius: 20px;
  background-color: red;
  height: 103%;
  font-size: 24px;
  transition: height 0.3s ease-in-out;
`;


const CompanyExpandedContent = styled(ExpandedContent)`
  background-color: lightblue;
  width: 100%;

`;

const ProductsExpandedContent = styled(ExpandedContent)`
  background-color: lightblue;
  width: 100%;

`;

const CustomersExpandedContent = styled(ExpandedContent)`
  background-color: green;
  width: 100%;

`;

const ResourcesExpandedContent = styled(ExpandedContent)`
  background-color: yellow;
  width: 100%;

`;


const AboutExpandedContent = styled(ExpandedContent)`
  background-color: green;
  width: 100%;

`;




const SigninExpandedContent = styled(ExpandedContent)`
  background-color: green;
  width: 100%;

`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;




export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
