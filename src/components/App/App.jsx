import React, { useEffect, useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import { Wrapper, Container } from './App.styles'

function App() {
  const [lettuce, setLettuce] = useState(true)
  const [rice, setRice] = useState(false)
  const [healthy, setHealthy] = useState(20)

  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  useEffect(() => {
    setTimeout(() => {
      setHealthy(50)
    }, 5000)
  }, [])

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              produtos disponíveis:
              <Checkbox
                value={lettuce}
                title='Lettuce'
                onClick={() => setLettuce(!lettuce)}
              />
              <Checkbox
                value={rice}
                title='Rice'
                onClick={() => setRice(!rice)}
              />
            </div>
          }
          middle={
            <div>
              sua lista de compras
              <Checkbox
                value={rice}
                title='Arroz'
                onClick={() => setRice(!rice)}
              />
            </div>
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
