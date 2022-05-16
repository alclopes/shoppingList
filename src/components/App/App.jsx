import React from 'react'
import { useDispatch } from 'react-redux'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import Statistics from '../Statistics'
import { Wrapper, Container } from './App.styles'

import { toggleProduct } from '../../features/products/products.slice'

function App() {
  const dispatch = useDispatch()

  function handleToggle(id) {
    dispatch(toggleProduct(id))
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList title='Lista de Produtos' onToggle={handleToggle} />
          }
          middle={
            <ShoppingList
              title='Sua Lista de Compras'
              displayOnlySelected
              onToggle={handleToggle}
            />
          }
          right={<Statistics />}
        />
      </Container>
    </Wrapper>
  )
}

export default App
