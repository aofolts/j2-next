import PropTypes from 'prop-types'

export default class Section extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      id: 'section-' + props.name
    }
  }

  render() {
    return ( 
      <section id={this.state.id}>
        {this.props.children}
      </section>
    )
  }

}

Section.propTypes = {
  name: PropTypes.string.isRequired
}

Section.defaultProps = {

}