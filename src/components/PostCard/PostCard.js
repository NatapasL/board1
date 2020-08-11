import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import processString from 'react-process-string'

import { URL_REGEX } from '../../constants/regex'
import { 
  Container,
  Header,
  Body,
  StyledA,
  PostLink,
  PostNumber
} from './styled'

dayjs.extend(relativeTime)

export const PostCard = ({ post, className, first }) => {
  const displayCreatedAt = () => {
    const createdAt = dayjs(post.created_at)
    const isToday = createdAt.add(23, 'hour').isAfter(dayjs())

    return isToday ? createdAt.fromNow(true) : createdAt.format('DD/MM/YY HH:mm:ss')
  }

  const formatPostBody = (text) => {
    const config = [
      {
        regex: URL_REGEX,
        fn: (key, result) => (
          <StyledA key={key} href={result[0]}>
            {result[0]}
          </StyledA>
        )
      },
      {
        regex: />>(\d{1,4})/,
        fn: (key, result) => (
          <PostLink key={key}>↑{Number(result[1])}</PostLink>
        )
      }
    ]

    return processString(config)(text)
  }

  return (
    <Container className={className}>
      {/* {parseTime(post.created_at)} */}
      <Header>
        {!first && (
          <>
            <PostNumber>{post.number}</PostNumber>
            :{post.ident}
            {' • '}
          </>
        )}
        {displayCreatedAt()}
      </Header>
      <Body>
        {formatPostBody(post.body)}
      </Body>
    </Container>
  )
}