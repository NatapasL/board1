import styled from '@emotion/styled'

import { colors } from '../../styles/variables'
import { PostCard } from '../PostCard'

export const Header = styled.div`
  background-color: ${colors.white};
  padding: 8px 16px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding-bottom: 8px;
  ${props => (props.center && `justify-content: center;`)}
`

export const FilterContainer = styled.div`
  font-weight: 600;
  color: grey;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 8px;
  margin: 8px 0;

  &::after {
    content: '▼';
    margin-left: 8px;
  }
`

export const Body = styled.div`

`

export const StyledPostCard = styled(PostCard)`
  margin: 4px 0;
`

export const FirstPostCard = styled(PostCard)`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 12px;
`