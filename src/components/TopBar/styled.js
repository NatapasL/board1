import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

export const Container = styled.div`
  /* background-color: #141518; */
  background-color: ${colors.grey};
  position: sticky;
  top: 0;
  color: #fff;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`

export const LeftContainer = styled.div`
  display: flex;
`

export const BreadcrumbContainer = styled.div`
  height: 100%;
  margin-left: 8px;
`

export const BreadcrumbLabel = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: ${colors.black1};
  padding-bottom: 4px;
`

export const ActionButton = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  font-weight: 600;
  color: ${colors.black5};
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
`

export const BackButton = styled(ActionButton)`
  padding-right: 8px;
  ${props => props.transparent && `
    opacity: 0;
  `}
`

export const MenuButton = styled(ActionButton)`
  
`