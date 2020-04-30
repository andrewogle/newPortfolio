import React from 'react'
import ResponsiveLayout from './ResponsiveLayout'
import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'
const Content = () => (
  <ResponsiveLayout
    breakPoint={767}
    renderDesktop={() => (
      <Desktop  />
    )}
    renderMobile={() => (
      <Mobile  />
    )}
  />
)
export default Content