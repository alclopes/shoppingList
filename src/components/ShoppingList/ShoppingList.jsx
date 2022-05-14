import React from 'react'
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'

function ShoppingList({ title, products }) {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products.map((product) => (
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
          />
        ))}
      </Array>
    </Wrapper>
  )
}

export default ShoppingList
