import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Banner = () => {
  const phrases = ["Invest to yourself. Invest to your goals.", "Invest to your Dreams."];
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

  const handleBannerClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <BannerContainer onClick={handleBannerClick} isClicked={isClicked}>
      <TextContainer>
        <TypingAnimation showText={showText} reverse={reverseAnimation}>
          {phrases[currentPhraseIndex]}
        </TypingAnimation>
      </TextContainer>
    </BannerContainer>
  );
};




const BannerContainer = styled.div`
  background-color: ${({ isClicked }) => (isClicked ? 'blue' : 'darkviolet')};
  padding: 20px;
  text-align: center;
  height: ${({ isClicked }) => (isClicked ? '400px' : '300px')};
  transition: height 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(${({ showModal }) => (showModal ? '100px' : '0')});
  cursor: pointer;
`;


const TextContainer = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  color: white;
  margin-top: ${({ isClicked }) => (isClicked ? '100px' : '80px')}; /* Update the margin-top */
  user-select: none;
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
    showText ? (reverse ? reverseTypingAnimation : typingAnimation) : 'none'} 3s steps(40, end) both;
`;

export default Banner;
