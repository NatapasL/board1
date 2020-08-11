import { useContext } from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'

import { storesContext } from '../../contexts/storesContext'
import { 
  Header, 
  Body,
  Title,
  HeaderContent,
  ButtonContainer,
  StyledTopicCard,
} from './styled'
import { Button } from '../Button'

export const BoardPage = observer(({ topics, isAll }) => {
  const { boardStore } = useContext(storesContext)
  const board = boardStore.currentBoard

  if (!board) return <div />

  const renderSeeAllButton = () => {
    if (isAll) return <div />

    return (
      <Link href="/boards/[board]" as={`/boards/${board.slug}?all=true`} passHref>
        <Button type="see_all">
          + ALL TOPICS
        </Button>
      </Link>
    )
  }
  
  return (
    <>
      <Header>
        <Title>
          <h1>/{board.slug}</h1>
        </Title>
        <HeaderContent>
          <b>{board.title}</b> <br />{board.description}
          <ButtonContainer>
            {renderSeeAllButton()}
          </ButtonContainer>
        </HeaderContent>
      </Header>
      <Body>
        {topics.map(topic => (
          <Link
            key={topic.id}
            href="/boards/[board]/[topic]"
            as={`/boards/${board.slug}/${topic.id}?recent=true`}
            passHref
          >
            <StyledTopicCard topic={topic} />
          </Link>
        ))
        }
        <ButtonContainer center>
          {renderSeeAllButton()}
        </ButtonContainer>
      </Body>
    </>
  )
})