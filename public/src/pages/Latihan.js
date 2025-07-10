import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { hijaiyahData } from '../data/hijaiyahData';

const LatihanContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Header = styled.div`
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
  margin-bottom: 20px;
`;

const GameCard = styled.div`
  background: white;
  border-radius: 25px;
  padding: 40px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
`;

const QuestionDisplay = styled.div`
  font-size: 5rem;
  margin: 30px 0;
  color: #2d3436;
`;

const QuestionText = styled.p`
  font-size: 1.3rem;
  color: #636e72;
  margin-bottom: 30px;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px 0;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const OptionButton = styled.button`
  background: ${props => {
    if (props.correct && props.showResult) return '#4CAF50';
    if (props.incorrect && props.showResult) return '#f44336';
    return 'linear-gradient(135deg, #667eea, #764ba2)';
  }};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${props => props.showResult ? 'none' : 'translateY(-3px)'};
    box-shadow: ${props => props.showResult ? 'none' : '0 8px 25px rgba(102, 126, 234, 0.4)'};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const ScoreDisplay = styled.div`
  font-size: 1.5rem;
  color: #2d3436;
  margin: 20px 0;
  font-weight: bold;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const ResultMessage = styled.div`
  font-size: 1.3rem;
  margin: 20px 0;
  padding: 15px;
  border-radius: 15px;
  background: ${props => props.correct ? '#d4edda' : '#f8d7da'};
  color: ${props => props.correct ? '#155724' : '#721c24'};
`;

const NextButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  }
`;

const RestartButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;

const Latihan = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameType, setGameType] = useState('huruf'); // 'huruf' atau 'nama'
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    const shuffledData = [...hijaiyahData].sort(() => Math.random() - 0.5);
    const newQuestions = shuffledData.slice(0, 10).map((huruf, index) => {
      const isHurufQuestion = Math.random() > 0.5;
      const correctAnswer = isHurufQuestion ? huruf.huruf : huruf.nama;
      const questionText = isHurufQuestion ? `Apa nama huruf ini?` : `Huruf apa yang bernama "${huruf.nama}"?`;
      
      // Generate wrong answers
      const wrongAnswers = shuffledData
        .filter(h => h.id !== huruf.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(h => isHurufQuestion ? h.nama : h.huruf);
      
      const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
      
      return {
        id: index,
        huruf: huruf,
        question: questionText,
        correctAnswer: correctAnswer,
        options: options,
        type: isHurufQuestion ? 'huruf' : 'nama'
      };
    });
    
    setQuestions(newQuestions);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  const handleAnswerClick = (answer) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    generateQuestions();
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <LatihanContainer>
      <Header>
        <Title>✏️ Latihan Interaktif</Title>
        <Subtitle>Uji kemampuanmu dalam mengenali huruf hijaiyah!</Subtitle>
      </Header>

      <GameCard>
        <ScoreDisplay>
          Skor: {score} / {questions.length}
        </ScoreDisplay>
        
        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>
        
        <div>
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </div>

        {currentQ.type === 'huruf' ? (
          <QuestionDisplay>{currentQ.huruf.huruf}</QuestionDisplay>
        ) : (
          <QuestionDisplay>{currentQ.huruf.huruf}</QuestionDisplay>
        )}
        
        <QuestionText>{currentQ.question}</QuestionText>

        <OptionsGrid>
          {currentQ.options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={showResult}
              correct={option === currentQ.correctAnswer}
              incorrect={option === selectedAnswer && option !== currentQ.correctAnswer}
              showResult={showResult}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsGrid>

        {showResult && (
          <ResultMessage correct={selectedAnswer === currentQ.correctAnswer}>
            {selectedAnswer === currentQ.correctAnswer 
              ? '🎉 Benar! Jawaban kamu tepat!' 
              : `❌ Salah! Jawaban yang benar adalah: ${currentQ.correctAnswer}`
            }
          </ResultMessage>
        )}

        {showResult && currentQuestion < questions.length - 1 && (
          <NextButton onClick={handleNextQuestion}>
            Pertanyaan Berikutnya →
          </NextButton>
        )}

        {showResult && currentQuestion === questions.length - 1 && (
          <div>
            <ResultMessage correct={score > questions.length / 2}>
              {score > questions.length / 2 
                ? `🎉 Selamat! Kamu mendapatkan ${score} dari ${questions.length} poin!` 
                : `💪 Kamu mendapatkan ${score} dari ${questions.length} poin. Ayo coba lagi!`
              }
            </ResultMessage>
            <RestartButton onClick={handleRestart}>
              Mulai Lagi
            </RestartButton>
          </div>
        )}
      </GameCard>
    </LatihanContainer>
  );
};

export default Latihan; 