import React from 'react'
import MainMenu from '../parts/MainMenu'
import {withHeaderContext} from '../parts/HeaderContext'

/**
 * Icon
 * 
 * Closes mobile menu
 * OR
 * Exits current mobile sub menu
 */
const MobileMenuExit = withHeaderContext(props => {
  const {activeSubMenuId,setActiveSubMenuId,closeMobileMenu} = props.headerContext

  return (
    <div 
      className='exit' 
      onClick={() => {
        if (activeSubMenuId) {
          props.headerContext.setActiveSubMenuById(false)
        } else {
          closeMobileMenu()
        }
      }}
      >
    </div>
  )
})

/**
 * Mobile Menu
 * 
 * Show on mobile devices
 */
class MobileMenu extends React.Component {
  constructor(props) {
    super(props);

    const boundMethods = [
    ]
      
    boundMethods.forEach(method => this[method] = this[method].bind(this))
    
    this.state = {
      openClass: props.openClass
    }
  }
  
  render() {
    const classes = [
      this.props.headerContext.mobileMenuIsOpen ? 'is-open' : null,
      this.props.headerContext.activeSubMenuId ? 'sub_menu-is-open' : null
    ].join(' ')

    return (
      <div id='menu-mobile' className={classes}>
        <MainMenu items={this.props.menu} />
        {this.state.activeMenu}
        <MobileMenuExit/>
      </div>
    )
  }
}

export default withHeaderContext(MobileMenu)