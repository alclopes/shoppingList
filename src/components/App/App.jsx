import React, { useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Wrapper, Container } from './App.styles'
import productsMock from '../../mocks/products.json'

function App() {
  const [healthy] = useState(20)

  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [products, setProducts] = useState(productsMock.products)

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={<ShoppingList title='Lista de Produtos' products={products} />}
          middle={
            <ShoppingList title='Sua Lista de Compras' products={products} />
          }
          right={
            <div>
              estatísticas
              <LineChart
                color={colors[0]}
                title='saudável'
                percentage={healthy - 30}
              />
              <LineChart
                color={colors[1]}
                title='nao tão saudável'
                percentage={healthy - 10}
              />
              <LineChart
                color={colors[2]}
                title='limpeza'
                percentage={healthy + 5}
              />
              <LineChart
                color={colors[3]}
                title='outros'
                percentage={healthy - 15}
              />
            </div>
          }
        />
      </Container>
    </Wrapper>
  )
}

export default App
