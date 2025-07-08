import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #b9f6ca;
  padding: 15px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #222;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.08);
  
  &:hover {
    color: #388e3c;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(34,34,34,0.08)' : 'transparent'};
  
  &:hover {
    background: rgba(34,34,34,0.08);
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const location = useLocation();
  
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">🎨 Belajar Hijaiyah</Logo>
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/'}>🏠 Beranda</NavLink>
          <NavLink to="/belajar" active={location.pathname === '/belajar'}>📚 Belajar</NavLink>
          <NavLink to="/latihan" active={location.pathname === '/latihan'}>✏️ Latihan</NavLink>
          <NavLink to="/quiz" active={location.pathname === '/quiz'}>🎮 Quiz</NavLink>
          <NavLink to="/tentang" active={location.pathname === '/tentang'}>ℹ️ Tentang</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 