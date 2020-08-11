import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { storesContext } from '../../contexts/storesContext'
import { 
  Header,
  Title,
  FirstPostCard,
  ButtonContainer,
  FilterContainer,
  Body,
  StyledPostCard,
} from './styled'
import { Button } from '../Button'

export const TopicPage = observer(({ posts, isRecent }) => {
  const { topicStore, boardStore } = useContext(storesContext)
  const topic = topicStore.currentTopic
  const board = boardStore.currentBoard

  if (!topic || !board) return <div />

  const filteredPosts = isRecent ? posts : posts.filter(post => Number(post.number) > 1)

  const renderSeeAllButton = (center) => {
    if (!isRecent) return <div />

    return (
      <ButtonContainer center={center}>
        <Link href="/boards/[board]/[topic]" as={`/boards/${board.slug}/${topic.id}`} passHref>
          <Button type="see_all">
            + ALL POSTS
          </Button>
        </Link>
      </ButtonContainer>
    )
  }

  const renderFirstPost = () => {
    const firstPost = posts.find(post => Number(post.number) === 1)
    if (!firstPost) return <div />

    return (
      <FirstPostCard post={firstPost} first />
    )
  }

  return (
    <>
      <Header>
        <Title>{topic.title}</Title>
        {!isRecent && renderFirstPost()}
        {renderSeeAllButton()}
      </Header>
      <FilterContainer>
        { isRecent ? 'LATEST POSTS' : 'ALL POSTS' }
      </FilterContainer>
      <Body>
        {filteredPosts.map(post => <StyledPostCard key={post.id} post={post} />)}
        {renderSeeAllButton(true)}
      </Body>
    </>
  )
})