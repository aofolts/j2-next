import PropTypes from 'prop-types'

export default class Wrap extends React.Component {

  render() {
    return ( 
      <div className={`${this.props.width}Wrap`}>
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