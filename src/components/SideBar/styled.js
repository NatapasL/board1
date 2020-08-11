import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

export const Container = styled.div`
  position: fixed;
  width: ${props => props.active ? '100vw' : 0};
  height: calc(100vh - 40px);
  top: 40px;
  right: 0;
  background-color: ${colors.grey};
  overflow: hidden;
  transition: width 450ms;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;
`

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px; 
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  white-space: nowrap;
`

export const ItemContainer = styled.a`
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
  white-space: nowrap;

  &:not(:last-child) {
    &:after {
      content: '';
      display: block;
      width: 132px;
      border-bottom: 1px solid ${colors.grey};
      margin-top: 4px;
    }
  }

  &:last-child {
    padding-bottom: 12px;
  }
`