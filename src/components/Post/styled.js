import styled from '@emotion/styled'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6e7881;
  border-left: 4px solid #6e7881;
  border-right: 4px solid #6e7881;
  margin-bottom: 4px;
`

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export const IdentityInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`

export const PostBodyContainer = styled.div`
  padding: 16px;
  white-space: pre-wrap;
  word-break: break-all;
`