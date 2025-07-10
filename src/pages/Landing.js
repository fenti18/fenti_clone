import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainScreen = styled.div`
  background: #b39ddb;
  border-radius: 30px;
  padding: 80px 40px;
  margin: 60px auto;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 30px;
  text-shadow:
    0 2px 8px rgba(0,0,0,0.25),
    0 0 2px #000,
    0 0 4px #000,
    2px 2px 0 #000,
    -2px -2px 0 #000;
`;

const Emoji = styled.span`
  text-shadow:
    0 2px 6px rgba(0,0,0,0.18),
    0 0 1px #000,
    1px 1px 0 #000,
    -1px -1px 0 #000;
`;

const StartButton = styled.button`
  background: #ffe066;
  color: #2d3436;
  border: none;
  border-radius: 25px;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    1px 1px 0 #fff,
    -1px -1px 0 #fff;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    background: #fdcb6e;
  }
`;

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MainScreen>
      <MainTitle>✨ Ayo Belajar Hijaiyah!</MainTitle>
      <StartButton onClick={() => navigate('/home')}>Mulai</StartButton>
    </MainScreen>
  );
};

export default Landing; 