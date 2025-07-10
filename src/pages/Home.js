import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const MainScreen = styled.div`
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 30px;
  padding: 80px 40px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    background: #fdcb6e;
  }
`;

const Hero = styled.div`
  background: #ffe066;
  border-radius: 30px;
  padding: 60px 40px;
  margin-bottom: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #2d3436;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #636e72;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  margin-top: 40px;
  justify-items: center;
  align-items: stretch;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const MenuCard = styled(Link)`
  background: white;
  border-radius: 25px;
  padding: 40px 30px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    border-color: #74b9ff;
  }

  @media (max-width: 700px) {
    min-height: 200px;
    padding: 30px 15px;
  }
`;

const MenuIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const MenuTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 15px;
`;

const MenuDescription = styled.p`
  color: #636e72;
  line-height: 1.5;
`;

const AnimatedBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.38;
  animation: floatBubble 8s ease-in-out infinite;
  box-shadow: 0 4px 32px 0 rgba(52, 152, 219, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.08);
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85) 0%, rgba(165,216,255,0.55) 60%, rgba(116,192,252,0.35) 100%);
  overflow: visible;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 18%;
    left: 22%;
    width: 32%;
    height: 22%;
    background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.0) 100%);
    border-radius: 50%;
    filter: blur(1.5px);
    pointer-events: none;
  }

  @keyframes floatBubble {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-40px) scale(1.08); }
    100% { transform: translateY(0) scale(1); }
  }
`;

const Home = () => {
  // Bubble color palette (all use same gradient now)
  // Generate random bubbles
  const bubbles = Array.from({ length: 10 }).map((_, i) => {
    const size = Math.random() * 60 + 60; // 60-120px
    const top = Math.random() * 80 + 5; // 5-85%
    const left = Math.random() * 90 + 2; // 2-92%
    const delay = Math.random() * 6; // 0-6s
    return (
      <Bubble
        key={i}
        style={{
          width: size,
          height: size,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <HomeContainer>
      <AnimatedBg>{bubbles}</AnimatedBg>
      <Hero>
        <HeroTitle>🎨 Belajar Huruf Hijaiyah</HeroTitle>
        <HeroSubtitle>
          Mari belajar huruf hijaiyah dengan cara yang menyenangkan! 
          Aplikasi ini dirancang khusus untuk anak-anak usia dini.
        </HeroSubtitle>
      </Hero>
      <MenuGrid>
        <MenuCard to="/belajar">
          <MenuIcon>📚</MenuIcon>
          <MenuTitle>Belajar Huruf</MenuTitle>
          <MenuDescription>
            Pelajari huruf hijaiyah satu per satu dengan gambar dan suara yang menarik.
          </MenuDescription>
        </MenuCard>
        <MenuCard to="/latihan">
          <MenuIcon>✏️</MenuIcon>
          <MenuTitle>Latihan Interaktif</MenuTitle>
          <MenuDescription>
            Latih kemampuanmu dengan permainan yang menyenangkan.
          </MenuDescription>
        </MenuCard>
        <MenuCard to="/quiz">
          <MenuIcon>🎮</MenuIcon>
          <MenuTitle>Quiz Seru</MenuTitle>
          <MenuDescription>
            Uji pengetahuanmu dengan quiz yang menantang dan seru.
          </MenuDescription>
        </MenuCard>
        <MenuCard to="/tentang">
          <MenuIcon>ℹ️</MenuIcon>
          <MenuTitle>Tentang Aplikasi</MenuTitle>
          <MenuDescription>
            Pelajari lebih lanjut tentang aplikasi dan cara menggunakannya.
          </MenuDescription>
        </MenuCard>
      </MenuGrid>
    </HomeContainer>
  );
};

export default Home; 