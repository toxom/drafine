import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Landing = ({ showModal }) => {
  const phrases = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, dui in luctus congue, enim sem placerat justo, vel aliquet leo lectus ac ipsum. Nulla facilisi. Proin ultrices, erat vel aliquam venenatis, tellus mi consequat est, eget laoreet ipsum elit vel risus. Phasellus id est non justo aliquam efficitur. Suspendisse potenti. Sed id gravida lectus. Nunc dictum posuere odio, ac tempor ipsum scelerisque vel. Cras in arcu sit amet turpis feugiat efficitur.", "Pellentesque tristique viverra sapien sed ultricies. Sed et placerat metus. Mauris in nisl libero. Morbi eu semper leo. Fusce at dui sed massa consequat tristique. Sed vestibulum eleifend posuere. Integer sollicitudin scelerisque lorem, ut pharetra nisi bibendum ut. Aliquam vitae eleifend ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper, urna sit amet semper dignissim, mauris elit pharetra elit, nec rhoncus arcu ex eu ex. Fusce dignissim mauris non sem congue aliquam. Phasellus quis dui aliquam, feugiat enim eu, tempus turpis. Ut vel ligula ac quam faucibus dictum. Donec interdum ultricies arcu, id bibendum risus iaculis ut."];
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

  const handleLandingClick = () => {
    setIsClicked(!isClicked);
  };

  if (showModal) {
    return null; // Hide the Landing component when showModal is true
  }

  return (
    <LandingContainer onClick={handleLandingClick} isClicked={isClicked} showModal={showModal}>
      <TextContainer isClicked={isClicked}>
        <TypingAnimation showText={showText} reverse={reverseAnimation}>
          {phrases[currentPhraseIndex]}
        </TypingAnimation>
      </TextContainer>
    </LandingContainer>
  );
};



const LandingContainer = styled.div`
  background-color: ${({ isClicked, isHeaderHovered }) => (isClicked || isHeaderHovered ? 'green' : 'darkviolet')};
  padding: 20px;
  text-align: center;
  height: 100%;
  border: 1px solid;
  border-radius: 20px;
  width: 100%;
  //height: ${({ isClicked }) => (isClicked ? '400px' : '300px')};
  transition: height 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(${({ showModal }) => (showModal ? '0' : '0')});
  cursor: pointer;

`;


const TextContainer = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-align: left;
  margin-left: 20px;
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
    showText ? (reverse ? reverseTypingAnimation : typingAnimation) : 'none'} 0.5s steps(400, end) both;
`;

export default Landing;
