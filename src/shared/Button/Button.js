import React from 'react'
import { Wrapper, ButtonStyled } from './Button.styles'

const Button = ({ title, onClick, color }) => {
  return (
    <>
      <Wrapper>
        <ButtonStyled onClick={onClick} color={color}>
          {title}
        </ButtonStyled>
      </Wrapper>
    </>
  )
}

export default Button
