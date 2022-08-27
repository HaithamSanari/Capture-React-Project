import React from 'react';
// Import Images & Icon
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
import home2 from '../assets/home2.png';
// Styled
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage } from '../styles';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <StyledImage>
        <img src={home2} alt='camera' />
      </StyledImage>
      <StyledDescription>
        <h2>
          High <span>quality</span> service
        </h2>
        <StyledDescriptionCards>
          <StyledCards>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCards>
          <StyledCards>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCards>
          <StyledCards>
            <div className='icon'>
              <img src={diaphragm} alt='icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCards>
          <StyledCards>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCards>
        </StyledDescriptionCards>
      </StyledDescription>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
    /* padding-left: 5rem; */
    text-align: center;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column-reverse;
  }
  
  
`;
const StyledDescriptionCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 5rem;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyledCards = styled.div`
  flex-basis: 18rem;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
