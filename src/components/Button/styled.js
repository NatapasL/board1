import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

export const StyledButton = styled.button`
  outline: none;
`

export const ButtonSeeAll = styled(StyledButton)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${colors.black1};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  background-color: ${colors.grey};
  line-height: 1;
  padding: 4px 8px;
  height: 28px;
  border-radius: 4px;
  border: none;
`