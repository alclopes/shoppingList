// app confirmando reset usando react-confirm-alert

import React from 'react'
import { useDispatch } from 'react-redux'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import Statistics from '../Statistics'
import Button from '../../shared/Button'
import { Wrapper, Container, WrapperButtons } from './App.styles'
import {
  toggleProduct,
  resetShop,
} from '../../features/products/products.slice'

function App() {
  const dispatch = useDispatch()

  function handleToggle(id) {
    dispatch(toggleProduct(id))
  }

  function handleReset() {
    dispatch(resetShop())
  }

  function handlePrint() {
    alert('Todo: Print')
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
          right={
            <>
              <Statistics />
              <WrapperButtons>
                <Button title='Reset' onClick={handleReset} color='#4D3E55' />
                <Button title='Print' onClick={handlePrint} color='#225E22' />
              </WrapperButtons>
            </>
          }
        />
      </Container>
    </Wrapper>
  )
}

export default App
