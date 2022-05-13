import { Wrapper, Container } from './App.styles.js'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'

function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={<div>produtos disponíveis</div>}
          middle={<div>lista de compras</div>}
          right={<div>estatísticas</div>}
        />
      </Container>
    </Wrapper>
  )
}

export default App
