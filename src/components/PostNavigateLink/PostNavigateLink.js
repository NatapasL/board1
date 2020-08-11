import { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { storesContext } from '../../contexts/storesContext'
import { Post } from '../Post'
import { 
  Container, 
  LinkContainer, 
  PopupContainer 
} from './styled'

export const PostNavigateLink = observer(({ postNumber }) => {
  const { postStore } = useContext(storesContext)
  const [active, setActive] = useState(false)

  const post = postStore.getPost(Number(postNumber))

  return (
    <Container 
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <LinkContainer 
        href={`#${postNumber}`} 
      >
        #{postNumber}
      </LinkContainer>
      {(post && active) && (
        <PopupContainer>
          <Post post={post} />
        </PopupContainer>
      )}
    </Container>
  )
})