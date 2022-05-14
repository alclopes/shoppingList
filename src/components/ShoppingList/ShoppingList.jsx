import React from 'react'
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'

function ShoppingList({ title }) {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        <Checkbox value={true} title='Alface' />
        <Checkbox value={false} title='Arroz' />
        <Checkbox value={true} title='Batata' />
        <Checkbox value={false} title='Pinhão' />
      </Array>
    </Wrapper>
  )
}

export default ShoppingList
