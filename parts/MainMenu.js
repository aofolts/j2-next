import { config } from "../config";
import Link from 'next/link'
import {withHeaderContext} from '../parts/HeaderContext'
import MenuItem from '../parts/MenuItem'
import css from '../src/less/header.less'
import mobileStyle from '../src/less/header-mobile.less'

class MainMenu extends React.Component {

  constructor(props) {
    super(props)
  
    const boundMethods = [
      'getMenuItems'
    ]

    boundMethods.forEach(method => this[method] = this[method].bind(this))
  }

  getMenuItems() {
    return this.props.items.map(item => {
      return (
        <MenuItem 
          item={item} 
          key={item.ID}
        />
      )
    })
  }

  render() {
    const {isMobile,activeSubMenuId} = this.props.headerContext

    const classes = [
      css.menu,
      isMobile ? mobileStyle.menu : null,
      isMobile && activeSubMenuId ? mobileStyle.menuShowingSubMenu : null
    ].join(' ')

    return (
      <ul id='menu' className={classes}>
        {this.getMenuItems()}
      </ul>
    )
  }

}

export default withHeaderContext(MainMenu)