import FooterMV from '../container/layout/footer'
import MVHeader from '../container/layout/header'
import { LayoutWrapper } from './style'

function LayoutMV({ children }) {
  return (
    <LayoutWrapper>
      <MVHeader></MVHeader>
      {children}

      <FooterMV></FooterMV>
    </LayoutWrapper>
  )
}

export default LayoutMV
