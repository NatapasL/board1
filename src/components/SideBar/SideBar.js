import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { storesContext } from '../../contexts/storesContext'
import {
  Container,
  Title,
  TitleContainer,
  ItemContainer,
} from './styled'

export const SideBar = observer(({ active, onUpdateActive }) => {
  const { boardStore } = useContext(storesContext)

  useEffect(() => {
    console.log('mounted')
    boardStore.fetchBoardList()
  }, [])

  if (!boardStore.boardList.length) {
    return <div>Loading...</div>
  }

  return (
    <Container active={active}>
      <TitleContainer>
        <Title>List</Title>
      </TitleContainer>
      {boardStore.boardList.map(board => (
        <Link key={board.id} href="/boards/[board]" as={`/boards/${board.slug}`} passHref>
          <ItemContainer>
            {board.title}
          </ItemContainer>
        </Link>
      ))}
    </Container>
  )
})

export default SideBar
