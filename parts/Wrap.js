import PropTypes from 'prop-types'

export default class Wrap extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      selector: 'wrap wrap-' + props.width
    }
  }

  render() {
    return ( 
      <div className={this.state.selector} style={this.state.style}>
        {this.props.children}
      </div>
    )
  }

}

Wrap.propTypes = {
  width: PropTypes.string
}

Wrap.defaultProps = {
  width: 'main'
}