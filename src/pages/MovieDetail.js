import React, { useEffect, useState } from 'react';
// Style
import styled from 'styled-components';
// Router
import { useLocation } from 'react-router-dom';
// Import Data
import { MovieState } from '../movieState';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const MovieDetail = () => {
  
  // React router
  const location = useLocation();
  const url = location.pathname;
  // State
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  // Effect
  useEffect(() => {
    const currentMovie = movies.filter((movieState) => {
      return movieState.url === url;
    });
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <motion.div
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <div>
              <img src={movie.mainImg} alt={movie.title} />
            </div>
          </StyledHeadLine>
          <StyledDescriptions>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledDescriptions>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt='movie' />
          </ImageDisplay>
          <ScrollTop />
        </motion.div>
      )}
    </>
  );
};

// const StyledDetails = styled.div``;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 15vh;
  position: relative;
  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;
const StyledDescriptions = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      height: 50vh;
    }
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledAward>
  );
};
export default MovieDetail;
