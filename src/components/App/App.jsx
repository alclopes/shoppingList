import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
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
  const componentRef = useRef(null)
  const dispatch = useDispatch()

  function handleToggle(id) {
    dispatch(toggleProduct(id))
  }

  function handleReset() {
    dispatch(resetShop())
  }

  function handlePdf() {
    alert('Todo: Pdf')
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
              ref={componentRef}
            />
          }
          right={
            <>
              <Statistics />
              <WrapperButtons>
                <Button title='Reset' onClick={handleReset} color='#900C3F' />

                <ReactToPrint
                  trigger={() => (
                    <Button title='Print' onClick={() => {}} color='#225E22' />
                  )}
                  content={() => componentRef.current}
                  documentTitle={'My Shopping List'}
                />
                <Button title='PDF' onClick={handlePdf} color='#4D3E55' />
              </WrapperButtons>
            </>
          }
        />
      </Container>
    </Wrapper>
  )
}

export default App
