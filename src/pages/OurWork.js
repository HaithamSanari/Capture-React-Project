import React from 'react';
// Style
import styled from 'styled-components';
// Router
import { Link } from 'react-router-dom';
// Images
import athlete from '../assets/athlete-small.png';
import theRacer from '../assets/theracer-small.png';
import goodTimes from '../assets/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from '../animation';
import ScrollTop from "../components/ScrollTop";
const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className='line-break'></motion.div>
        <Link to='/work/the-athlete'>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt='athlete' />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className='line-break'></motion.div>
        <Link to='/work/the-racer'>
          <img src={theRacer} alt='theRacer' />
        </Link>
      </Movie>
      <Movie>
        <h2>Architecture</h2>
        <motion.div variants={lineAnim} className='line-break'></motion.div>
        <Link to='/work/good-times'>
          <img src={goodTimes} alt='goodTimes' />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  padding: 2rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 7rem;
  h2 {
    color: black;
  }
  .line-break {
    height: 5px;
    width: 100%;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
