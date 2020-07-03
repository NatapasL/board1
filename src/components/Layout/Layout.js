import { Container, Background } from './styled'
import { SideBar } from '../SideBar'
import { TopBar } from '../TopBar'

export const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <SideBar />
      <Background>
        <div id="top" />
        <Container>{children}</Container>
        <div id="bottom" />
      </Background>
    </>
  )
}
