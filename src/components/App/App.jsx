import { Wrapper, Container, Title } from './App.styles.js'
import AppContainer from '../AppContainer'

function App() {
  return (
    <Wrapper>
      <Container>
        <Title>Hello World !</Title>
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
