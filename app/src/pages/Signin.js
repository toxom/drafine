import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import corpart1 from '../assets/corpart1.svg';
import spbstu from '../assets/spbstu.png';
import fasie from '../assets/fasie.png';
import RegistrationForm from '../RegistrationForm';


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 20px;
`;

const Signin = ({ showModal }) => {
  const phrases = ["Sign in to follow us and try our products.", "More information coming."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [reverseAnimation, setReverseAnimation] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReverseAnimation(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReverseAnimation(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);

  const handleSigninClick = () => {
    setIsClicked(!isClicked);
  };

  if (showModal) {
    return null; // Hide the Signin component when showModal is true
  }

  return (
  <SigninContainer onClick={handleSigninClick} isClicked={isClicked} showModal={showModal}>
    <TextContainer isClicked={isClicked}>
      <TypingAnimation showText={showText} reverse={reverseAnimation}>
        {phrases[currentPhraseIndex]}
      </TypingAnimation>
      <RegistrationForm />

    </TextContainer>



  </SigninContainer>
  );
};




const SigninContainer = styled.div`
  display: flex;
  background-color: ${({ isClicked, isHeaderHovered }) => (isClicked || isHeaderHovered ? 'green' : 'black')};
  padding: 20px;
  width: 100%;
  text-align: center;
  height: 100%;
  border: 1px solid;
  border-radius: 20px;
  //height: ${({ isClicked }) => (isClicked ? '400px' : '300px')};
  transition: height 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(${({ showModal }) => (showModal ? '0' : '0')});
  cursor: pointer;
  user-select: none;


`;



const TextContainer = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-align: left;
  justify-content: center;
  margin-bottom: 80px;
  margin-left: 20px;
  color: white;
  margin-top: ${({ isClicked }) => (isClicked ? '0px' : '0px')}; /* Update the margin-top */
  user-select: none;

  &:hover {
    //background-color: ${({ isHovered }) => (isHovered ? 'rgb(243, 243, 243)' : 'rgb(243, 243, 243)')};
    //transition: height 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    /* Styles for screens up to 768px */
    font-size: 30px;
    flex-direction: column;
    align-items: flex-start;
    
  }

`;


const typingAnimation = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
`;

const reverseTypingAnimation = keyframes`
  0% {
    width: 100%;
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
`;

const TypingAnimation = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${({ showText, reverse }) =>
    showText ? (reverse ? reverseTypingAnimation : typingAnimation) : 'none'} 1s steps(10, end) both;
`;

export default Signin;
