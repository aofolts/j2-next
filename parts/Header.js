import HeaderScript from './HeaderScript'
import MainMenu from './MainMenu'
import Link from 'next/link'
import {HeaderContext} from '../parts/HeaderContext'
import MobileMenu from '../parts/MobileMenu'
import css from '../src/less/header.less'
import desktopStyle from '../src/less/header-desktop.less'
import mobileStyle from '../src/less/header-mobile.less'
import {withScroll} from '../parts/ScrollContext'
import NProgress from 'nprogress'
import Router from 'next/router'

/**
 * HEADER
 */
class Header extends React.Component {

  constructor(props) {
    super(props)
  
    const boundMethods = [
      'checkIsDocked',
      'checkIsMobile',
      'closeMobileMenu',
      'getHeaderClass',
      'getMobileMenu',
      'openMobileMenu',
      'setActiveSubMenuById',
      'watchRoute',
      'watchScroll',
      'watchWindow'
    ]
      
    boundMethods.forEach(method => this[method] = this[method].bind(this))

    this.state = {
      activeSubMenuId: false,
      isDocked: true,
      isMobile: false,
      mobileMenuIsOpen: false,
      closeMobileMenu: this.closeMobileMenu,
      openMobileMenu: this.openMobileMenu,
      setActiveSubMenuById: this.setActiveSubMenuById
    }
  }

  checkIsDocked() {

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
    this.checkIsDocked()
    this.checkIsMobile()
    this.watchScroll()
    this.watchRoute()
    this.watchWindow()
  }

  checkIsDocked() {
    const docked = window.pageYOffset === 0

    if (docked !== this.state.isDocked) {
      this.setState({
        isDocked: window.pageYOffset === 0 ? true : false
      })
    }
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
      return (
        <HeaderContext.Provider value={this.state}>
          <MobileMenu menu={this.props.menu} closeMobileMenu={() => this.closeMobileMenu()}/>
          <div id='mobileMenuToggle' className={mobileStyle.mobileMenuToggle} onClick={this.openMobileMenu}>
            <div className={mobileStyle.topBar}></div>
            <div className={mobileStyle.middleBar}></div>
            <div className={mobileStyle.bottomBar}></div>
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

  watchRoute() {
    Router.onRouteChangeStart = (url) => {
      NProgress.start()
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
  }

  watchScroll() {
    window.addEventListener('scroll',e => {
      this.checkIsDocked()
    })
  }

  watchWindow() {
    window.addEventListener('resize',e => {
      this.checkIsMobile()
    })
  }

  render() {
    const headerClasses = [
      css.header,
      this.state.isDocked ? null : css.scrollingHeader
    ].join(' ')

    const navClasses = [
      css.nav,
      this.state.isMobile ? mobileStyle.nav : desktopStyle.nav
    ].join(' ')

    return (
      <header id='header' className={headerClasses}>
        <nav id='nav' className={navClasses}>
          <Link href={`/?slug=home&apiRoute=pages`} as={`/`}>
            <a id='site_name' className={css.siteName}>
              <img id='siteLogo' className={css.siteLogo} src='/static/img/logo-inline.svg'/>
            </a>
          </Link>
          {this.getMobileMenu()}
        </nav>
      </header>
    )
  }
}

export default Header