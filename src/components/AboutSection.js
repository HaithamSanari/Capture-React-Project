import React from 'react';
// Image
import home1 from '../assets/home1.png';
// Component
import Wave from './Wave';
// Styled
import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';
// Router
import { Link } from 'react-router-dom';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true. </motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to='/contact'>
          <StyledButton variants={fade}>3. Contact Us</StyledButton>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt='guy with a camera' />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

// Styles

const StyledButton = styled(motion.button)`
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: 0.5s all ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

export default AboutSection;
