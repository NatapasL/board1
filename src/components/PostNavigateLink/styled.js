import styled from '@emotion/styled'
import { mq } from '../../styles/variables'

export const Container = styled.span`
  position: relative;
`

export const LinkContainer = styled.a`
  
`

export const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100vw;
  max-width: calc(100vw - 100px);
  background-color: #fff;

  ${mq.sm} {
    max-width: calc(640px - 100px);
  }

  ${mq.md} {
    max-width: calc(768px - 100px);
  }

  ${mq.lg} {
    max-width: calc(980px - 100px);
  }
`