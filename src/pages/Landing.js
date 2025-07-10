import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const hijaiyahPattern = [
  'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش',
  'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'و', 'ه', 'ي'
];

const PatternBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const floatAnim = (xMove, yMove) => keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(${xMove}px, ${yMove}px); }
`;

const PatternChar = styled.span`
  position: absolute;
  font-size: ${props => props.size}px;
  color: #fff;
  opacity: ${props => props.opacity};
  left: ${props => props.left}vw;
  top: ${props => props.top}vh;
  font-family: 'Noto Naskh Arabic', 'Arial', sans-serif;
  font-weight: bold;
  user-select: none;
  filter: blur(0.5px);
  animation: ${props => floatAnim(props.xMove, props.yMove)} ${props => props.duration}s ease-in-out infinite alternate;
  animation-delay: ${props => props.delay}s;
`;

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
  animation: floatUpDown 3s ease-in-out infinite alternate;
  @keyframes floatUpDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(-18px); }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Emoji = styled.span`
  display: inline-block;
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
  transition: all 0.4s cubic-bezier(.4,2,.6,1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    1px 1px 0 #fff,
    -1px -1px 0 #fff;
  &:hover {
    transform: scale(1.08) translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    background: #fdcb6e;
  }
`;

const Landing = () => {
  const navigate = useNavigate();
  // Generate 40 random pattern chars with random animation
  const patternChars = Array.from({ length: 40 }).map((_, i) => {
    const char = hijaiyahPattern[Math.floor(Math.random() * hijaiyahPattern.length)];
    const size = Math.floor(Math.random() * 40) + 48; // 48-88px
    const opacity = Math.random() * 0.25 + 0.12; // 0.12-0.37
    const left = Math.random() * 90; // 0-90vw
    const top = Math.random() * 80; // 0-80vh
    const xMove = (Math.random() - 0.5) * 60; // -30 to 30 px
    const yMove = (Math.random() - 0.5) * 60; // -30 to 30 px
    const duration = Math.random() * 2 + 3.5; // 3.5-5.5s
    const delay = Math.random() * 2.5; // 0-2.5s
    return (
      <PatternChar
        key={i}
        size={size}
        opacity={opacity}
        left={left}
        top={top}
        xMove={xMove}
        yMove={yMove}
        duration={duration}
        delay={delay}
      >
        {char}
      </PatternChar>
    );
  });

  // Tambahkan pattern di pojok kanan atas
  const extraPattern = [
    <PatternChar key="topright1" size={60} opacity={0.22} left={92} top={6} xMove={-10} yMove={10} duration={4.2} delay={0.5}>{hijaiyahPattern[3]}</PatternChar>,
    <PatternChar key="topright2" size={54} opacity={0.19} left={97} top={12} xMove={-8} yMove={8} duration={4.7} delay={1.1}>{hijaiyahPattern[7]}</PatternChar>,
    // pojok kiri bawah
    <PatternChar key="bottomleft1" size={66} opacity={0.23} left={4} top={85} xMove={12} yMove={-12} duration={4.5} delay={0.7}>{hijaiyahPattern[12]}</PatternChar>,
    <PatternChar key="bottomleft2" size={50} opacity={0.18} left={8} top={92} xMove={10} yMove={-10} duration={4.9} delay={1.3}>{hijaiyahPattern[20]}</PatternChar>,
  ];

  return (
    <>
      <PatternBg>{[...patternChars, ...extraPattern]}</PatternBg>
      <MainScreen>
        <MainTitle><Emoji>✨</Emoji> Ayo Belajar Hijaiyah!</MainTitle>
        <StartButton onClick={() => navigate('/home')}>Mulai</StartButton>
      </MainScreen>
    </>
  );
};

export default Landing; 