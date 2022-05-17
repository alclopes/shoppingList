import styled from 'styled-components'
//import bg from '../../assets/bg.svg'

const fontTitle = '#404040'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #222428;
  // background-image: url($ {bg});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: left;
  align-items: center;
  margin-top: 1em;
  gap: 0.5em;
`
export const Title = styled.h1`
  margin-left: 1em;
  padding-top: 1em;
  color: ${fontTitle};
  font-size: 64px;
`
export const Container = styled.div`
  width: 734px;
  height: 574px;
  background-color: #777799;
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`
