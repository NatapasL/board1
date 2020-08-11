import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 8px 16px;
`

export const Header = styled.div`
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
  color: ${colors.black5};
`

export const PostNumber = styled.span`
  font-weight: 600;
  font-size: 11px;
  color: ${colors.black5};
`

export const Body = styled.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 16px;
`

export const StyledA = styled.a`
  color: ${colors.link};
`

export const PostLink = styled(StyledA)`
  font-size: 14px;
  font-weight: 500;
`