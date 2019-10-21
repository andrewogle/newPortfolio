import React from 'react'
import ResponsiveLayout from './ResponsiveLayout'
import Mobile from './Mobile'
import Desktop from './Desktop'
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