import styled from '@emotion/styled'

import { colors } from '../../styles/variables'
import { TopicCard } from '../TopicCard/TopicCard'

export const Header = styled.div`
  background-color: ${colors.white};
  padding: 8px 16px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`

export const HeaderContent = styled.div`
  font-size: 14px;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  ${props => (props.center && `justify-content: center;`)}
`

export const StyledTopicCard = styled(TopicCard)`
  margin: 4px 0;
`

export const Body = styled.div`

`