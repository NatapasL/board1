import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

export const Container = styled.a`
  display: block;
  background-color: ${colors.white};
  padding: 8px 16px;
`

export const Header = styled.div`
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
`

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`

export const Footer = styled.div`
  font-size: 12px;

  b {
    font-weight: 600;
  }
`