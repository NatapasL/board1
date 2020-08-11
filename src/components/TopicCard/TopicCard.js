import { forwardRef, useContext } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  Container, 
  Title,
  Header,
  Footer
} from './styled'

dayjs.extend(relativeTime)

export const TopicCard = forwardRef(({ topic, href, onClick, className }, ref) => {
  const displayHref = href.replace(/\?.*/, '').replace(/^\//, '')
  const timeDiff = dayjs(topic.posted_at).fromNow()

  return (
    <Container 
      href={href} 
      onClick={onClick} 
      ref={ref} 
      className={className}
    >
      <Header>
        {displayHref} • {timeDiff}
      </Header>
      <Title>
        {topic.title}
      </Title>
      <Footer>
        Total of <b>{topic.post_count} posts</b>
      </Footer>
    </Container>
  )
})