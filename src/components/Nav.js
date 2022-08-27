import React from 'react';
// Styled
import styled from 'styled-components';
// Router
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1 id='logo'>
        <Link to='/'>Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(40, 40, 40, 0.9);
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 10rem;
  #logo {
    font-family: 'Lobster', cursive;
    a {
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-left: 10rem;
    position: relative;
    a {
      transition: 0.3s all ease;
      &:hover {
        color: #23d997;
        height: 100%;
      }
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
        margin: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 30%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
