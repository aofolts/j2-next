import React from 'react'

const HeaderContext = React.createContext({
  isMobile: null,
  activeSubMenuId: false,
  closeMobileMenu: () => {},
  openMobileMenu: () => {},
  getActiveSubMenuId: () => {},
  setActiveSubMenuId: () => {}
})

function withHeaderContext(Component) {
  return props => (
    <HeaderContext.Consumer>
      {headerContext => (
        <Component {...props} headerContext={headerContext}/>
      )}
    </HeaderContext.Consumer>
  )
}

export {
  HeaderContext,
  withHeaderContext
}