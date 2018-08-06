import React from 'react'
import Link from 'next/link'
import {withHeaderContext} from '../parts/HeaderContext'
import { config } from "../config";

class MenuItem extends React.Component {

  constructor(props) {
    super(props)

    const boundMethods = [
      'getItemClass',
      'getSubMenuToggle',
    ]
    
    boundMethods.forEach(method => this[method] = this[method].bind(this))

    this.item = props.item;
    this.subMenu = props.item.sub_menu || []
  }

  componentWillReceiveProps(props) {
    this.setState({
      subMenuIsOpen: props.subMenuIsOpen,
      activeSubMenuId: props.activeSubMenuId
    })
  }

  getItemClass() {
    const classes = [
      'item',
      'item-primary'
    ]

    return classes.join(' ')
  }

  getSubMenu() {
    if (this.subMenu) {
      const items = this.subMenu.map(item => {
        const slug    = config.getPostSlug(item.url),
              target  = (item.type == 'custom') ? '_blank' : null

        const href = {
          pathname: slug,
          query: {
            slug: slug,
            apiRoute: 'pages'
          }
        }
        
        return (
          <li className='item item-secondary' key={item.ID}>
            <Link href={href} as={slug} prefetch>
              <a className='title-secondary' target={target}>
                {item.title}
              </a>
            </Link>
          </li>
        )
      })

      const classes = [
        'sub_menu',
        this.props.headerContext.activeSubMenuId === this.item.ID ? 'is-active' : null,
      ].join(' ')
  
      return (
        <ul className={classes}>
          {items} 
        </ul>
      )
    }
    
    return null
  }

  getSubMenuToggle() {
    if (this.subMenu.length > 0) {
      return (
        <div 
          className='sub_menu-toggle' 
          onClick={() => this.props.headerContext.setActiveSubMenuById(this.item.ID)}
          >
        </div>
      )
    } 
    
    return null
  }

  render() {
    const item = this.props.item 
    const subMenuClass = (this.subMenu.length > 0) ? 'has-children' : null,
          itemClass    = ['item item-primary',subMenuClass].join(' '),
          slug         = item.url ? config.getPostSlug(item.url) : null,
          target       = (item.type == 'custom') ? '_blank' : null

    const link = slug 
      ? (
        <Link href={{ pathname: slug, query: {slug: slug, apiRoute: "pages"} }} as={slug}>
          <a target={target}>
            {item.title}
          </a>
        </Link>
      ) 
      : (
        <a>
          {item.title}
        </a>
      )


    return (
      <li className={itemClass} >
        <div className='title'>
          {link}
          {this.getSubMenuToggle()}
        </div>
        {this.getSubMenu()}
      </li>
    )
  }

}

export default withHeaderContext(MenuItem)