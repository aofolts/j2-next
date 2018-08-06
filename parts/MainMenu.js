import { config } from "../config";
import Link from 'next/link'
import {withHeaderContext} from '../parts/HeaderContext'
import MenuItem from '../parts/MenuItem'

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
    const showClass = this.props.headerContext.activeSubMenuId ? 'show-sub_menu' : null

    return (
      <ul id='menu' className={showClass}>
        {this.getMenuItems()}
      </ul>
    )
  }

}

export default withHeaderContext(MainMenu)