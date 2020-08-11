import { useState } from 'react'

import { Container, Background } from './styled'
import { SideBar } from '../SideBar'
import { TopBar } from '../TopBar'

export const Layout = ({ children }) => {
  const [sideBarActive, setSideBarActive] = useState(false)

  return (
    <>
      <TopBar onMenuButtonClick={() => setSideBarActive(!sideBarActive)} />
      <Background>
        <div id="top" />
        <Container>{children}</Container>
        <div id="bottom" />
      </Background>
      <SideBar active={sideBarActive} />
    </>
  )
}
