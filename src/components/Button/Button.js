import { forwardRef } from 'react'

import { 
  StyledButton,
  ButtonSeeAll 
} from './styled'

export const Button = forwardRef(({ type, children, className, onClick, href }, ref) => {
  let ButtonComponent

  switch(type) {
    case 'see_all':
      ButtonComponent = ButtonSeeAll
      break
    default:
      ButtonComponent = StyledButton
  }

  return (
    <ButtonComponent
      className={className}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </ButtonComponent>
  )
})