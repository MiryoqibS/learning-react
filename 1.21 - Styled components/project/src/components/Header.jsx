import styled from 'styled-components';
import React from 'react';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: ${({ theme }) => theme.bg};
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.3s, color 0.3s;

  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const Header = ({ toggleTheme }) => {
    return (
        <HeaderStyles>
            <ToggleButton onClick={toggleTheme}>
                переключить тему
            </ToggleButton>
        </HeaderStyles>
    );
};
