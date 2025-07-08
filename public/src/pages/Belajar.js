import React, { useState } from 'react';
import styled from 'styled-components';
import { hijaiyahData } from '../data/hijaiyahData';
import BackButton from '../components/BackButton';

const BelajarContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #636e72;
`;

const HurufGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, auto);
  gap: 20px;
  margin-bottom: 40px;
`;

const HurufCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    border-color: #74b9ff;
  }
`;

const HurufDisplay = styled.div`
  font-size: 4rem;
  margin-bottom: 15px;
  color: #2d3436;
`;

const HurufName = styled.h3`
  font-size: 1.3rem;
  color: #2d3436;
  margin-bottom: 10px;
`;

const HurufLatin = styled.p`
  font-size: 1rem;
  color: #636e72;
  margin-bottom: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 25px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #ff5252;
  }
`;

const ModalHuruf = styled.div`
  font-size: 6rem;
  margin-bottom: 20px;
  color: #2d3436;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 15px;
`;

const ModalInfo = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 15px;
`;

const InfoItem = styled.div`
  margin: 10px 0;
  text-align: left;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: #2d3436;
`;

const PlayButton = styled.button`
  background: #74b9ff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    background: #4fc3f7;
  }
`;

const Belajar = () => {
  const [selectedHuruf, setSelectedHuruf] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleHurufClick = (huruf) => {
    setSelectedHuruf(huruf);
  };

  const handleCloseModal = () => {
    setSelectedHuruf(null);
    setIsPlaying(false);
  };

  const playAudio = () => {
    setIsPlaying(true);
    // Simulasi audio play (dalam implementasi nyata akan menggunakan Web Audio API)
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <>
      <BackButton />
      <BelajarContainer>
        <Header>
          <Title>📚 Belajar Huruf Hijaiyah</Title>
          <Subtitle>Klik huruf untuk mempelajari lebih lanjut</Subtitle>
        </Header>

        <HurufGrid>
          {hijaiyahData.map((huruf) => (
            <HurufCard key={huruf.id} onClick={() => handleHurufClick(huruf)}>
              <HurufDisplay>{huruf.huruf}</HurufDisplay>
              <HurufName>{huruf.nama}</HurufName>
              <HurufLatin>{huruf.latin}</HurufLatin>
            </HurufCard>
          ))}
        </HurufGrid>

        {selectedHuruf && (
          <Modal onClick={handleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              
              <ModalHuruf>{selectedHuruf.huruf}</ModalHuruf>
              <ModalTitle>{selectedHuruf.nama}</ModalTitle>
              
              <ModalInfo>
                <InfoItem>
                  <InfoLabel>Nama Latin:</InfoLabel> {selectedHuruf.latin}
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Contoh Kata:</InfoLabel> {selectedHuruf.contoh}
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Arti:</InfoLabel> {selectedHuruf.arti}
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Deskripsi:</InfoLabel> {selectedHuruf.deskripsi}
                </InfoItem>
              </ModalInfo>

              <PlayButton onClick={playAudio} disabled={isPlaying}>
                {isPlaying ? '🔊 Memutar...' : '🔊 Dengarkan Suara'}
              </PlayButton>
            </ModalContent>
          </Modal>
        )}
      </BelajarContainer>
    </>
  );
};

export default Belajar; 