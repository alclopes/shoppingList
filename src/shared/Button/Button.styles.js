import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

export const ButtonStyled = styled.button`
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  height: 0.13 0em;
  width: 100%;
  padding: 0.35em;
  color: #fff;
  border-radius: 0.31em;
  transition: filter 0.2s;

  ${({ color }) => css`
    background: ${color || '#8257E5'};
    border: 0.12em solid ${color || '#8257E5'};
  `}

  &:hover {
    filter: brightness(0.9);
  }
`
