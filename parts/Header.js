import '../src/less/header.less'
import HeaderScript from './HeaderScript'
import MainMenu from './MainMenu'
import Link from 'next/link'
import {HeaderContext} from '../parts/HeaderContext'
import MobileMenu from '../parts/MobileMenu'

/**
 * HEADER
 */
export default class Header extends React.Component {

  constructor(props) {
    super(props)
  
    const boundMethods = [
      'checkIsMobile',
      'closeMobileMenu',
      'getHeaderClass',
      'getMobileMenu',
      'openMobileMenu',
      'setActiveSubMenuById',
      'watchWindow'
    ]
      
    boundMethods.forEach(method => this[method] = this[method].bind(this))

    this.state = {
      activeSubMenuId: false,
      isMobile: false,
      mobileMenuIsOpen: false,
      closeMobileMenu: this.closeMobileMenu,
      openMobileMenu: this.openMobileMenu,
      setActiveSubMenuById: this.setActiveSubMenuById
    }
  }

  checkIsMobile() {
    const width    = window.outerWidth,
          isMobile = (width < 1280) || false

    if (isMobile !== this.state.isMobile) {
      this.setState({
        isMobile: isMobile
      })
    }
  }

  componentDidMount() {
    this.checkIsMobile()
    this.watchWindow()

    require('./HeaderScript')
    const Script = new HeaderScript()
  }

  closeMobileMenu() {
    this.setState({
      activeSubMenuId: false,
      mobileMenuIsOpen: false
    })
  }

  getHeaderClass() {
    if (this.state.isMobile) {
      return 'is-mobile'
    } else {
      return 'not-mobile'
    }
  }

  getMobileMenu() {
    if (this.state.isMobile) {
      const openClass = this.state.mobileMenuIsOpen ? 'is-open' : 'is-closed'

      return (
        <HeaderContext.Provider value={this.state}>
          <MobileMenu openClass={openClass} menu={this.props.menu} closeMobileMenu={() => this.closeMobileMenu()}/>
          <div className='toggle' onClick={this.openMobileMenu}>
            <div className='bar bar-top'></div>
            <div className='bar bar-middle'></div>
            <div className='bar bar-bottom'></div>
          </div>
        </HeaderContext.Provider>
      )
    } else {
      return (
        <HeaderContext.Provider value={this.state}>
           <MainMenu items={this.props.menu} />
        </HeaderContext.Provider>
      )
    }
  }

  openMobileMenu() {
    this.setState({
      mobileMenuIsOpen: true
    })
  }
  
  setActiveSubMenuById(id) {
    this.setState({
      activeSubMenuId: id
    })
  }

  watchWindow() {
    window.addEventListener('resize',e => {
      this.checkIsMobile()
    })
  }

  render() {
    return (
      <header id='header' className={this.getHeaderClass()}>
        <nav id='nav'>
          <Link href={{pathname:'/', query: {slug:'home',apiRoute:'pages'} }} as={`/`}>
            <a id='site_name'>
              <img id='siteLogo' src='/static/img/logo-inline.svg'/>
            </a>
          </Link>
          {this.getMobileMenu()}
        </nav>
      </header>
    )
  }

}