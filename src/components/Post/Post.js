import dayjs from 'dayjs'
import processString from 'react-process-string'

import { URL_REGEX } from '../../constants/regex'
import { 
  PostContainer,
  PostInfoContainer,
  PostBodyContainer,
  IdentityInfo,
} from './styled'
import { PostNavigateLink } from '../PostNavigateLink'

export const Post = ({ post }) => {
  const parseTime = (time) => dayjs(time).format('DD/MM/YYYY HH:mm:ss')

  const formatPostBody = (text) => {
    const config = [
      {
        regex: URL_REGEX,
        fn: (key, result) => (
          <a key={key} href={result[0]}>
            {result[0]}
          </a>
        )
      },
      {
        regex: />>(\d{1,4})/,
        fn: (key, result) => (
          <PostNavigateLink 
            key={key} 
            postNumber={Number(result[1])} 
          />
        )
      }
    ]

    return processString(config)(text)
  }

  return (
    <PostContainer id={post.number}>
      <PostInfoContainer>
        <div>
          <div>
            No.{post.number}
          </div>
          <div>
            {parseTime(post.created_at)}
          </div>
        </div>
        <IdentityInfo>
          {post.ident}
        </IdentityInfo>
      </PostInfoContainer>
      <PostBodyContainer>
        {formatPostBody(post.body)}
      </PostBodyContainer>
    </PostContainer>
  )
}