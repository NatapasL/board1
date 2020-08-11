import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'

import { storesContext } from '../../contexts/storesContext'
import {
  Container,
  BreadcrumbContainer,
  BreadcrumbLabel,
  LeftContainer,
  BackButton,
  MenuButton,
} from './styled'
import { SideBar } from '../SideBar'

export const TopBar = observer(({ onMenuButtonClick }) => {
  const router = useRouter()
  const { boardStore, topicStore } = useContext(storesContext)
  const { board, topic } = router.query

  let currentBoard
  if (boardStore.currentBoard && boardStore.currentBoard.slug == board) {
    currentBoard = boardStore.currentBoard
  }

  let currentTopic
  if (topicStore.currentTopic && Number(topicStore.currentTopic.id) === Number(topic)) {
    currentTopic = topicStore.currentTopic
  }

  const renderBreadcrumb = () => {
    return (
      <BreadcrumbContainer>
        {currentBoard && (
          <>
            <Link href="/boards/[board]" as={`/boards/${currentBoard.slug}`} passHref>
              <BreadcrumbLabel>
                {currentBoard.slug}
              </BreadcrumbLabel>
            </Link>
            {currentTopic && (
              <>
                {' | '}
                <BreadcrumbLabel>
                  {currentTopic.id}
                </BreadcrumbLabel>
              </>
            )}
          </> 
        )}
      </BreadcrumbContainer>
    )
  }

  const renderBackButton = () => {
    return (
      <BackButton onClick={() => router.back()}>
        BACK
      </BackButton>
    )
  }

  return (
    <Container>
      <LeftContainer>
        {renderBackButton()}
        {renderBreadcrumb()}
      </LeftContainer>
      <a href="#bottom">down</a>
      <MenuButton onClick={onMenuButtonClick}>
        Menu
      </MenuButton>
    </Container>
  )
})

TopBar.defaultProps = {
  onMenuButtonClick: () => {}
}