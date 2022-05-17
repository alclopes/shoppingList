import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.31em;
  height: 0.13 0em;
  color: #fff;
  padding: 0.35em;
  transition: filter 0.2s;

  ${({ color }) => css`
    background: ${color || '#8257E5'};
    border: 0.12em solid ${color || '#8257E5'};
  `}

  &:hover {
    filter: brightness(0.9);
  }
`
