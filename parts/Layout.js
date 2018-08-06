import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {

  render() {
    return (
      <div id='page'>
        <Header menu={this.props.menu} />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default Layout;