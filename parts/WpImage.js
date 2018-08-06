import PropTypes from 'prop-types'
import Visibility from 'react-visibility-sensor'

export default class Image extends React.Component {

  constructor(props) {
    super(props)

    const boundMethods = [
      'getSrcset',
      'loadImage',
      'checkVisibility'
    ]

    boundMethods.forEach(method => this[method] = this[method].bind(this))
  
    const image = props.data

    this.image       = image
    this.sizes       = image.sizes
    this.loadType    = props.loadType
    this.loaded      = false

    if (props.loadType === 'manual') {
      console.log('manual')
      console.log(image)
    }

    this.state = {
      src: image.sizes.lowres.url,
      srcSet: null
    }
  }

  componentWillReceiveProps(props) {
    if (props.loaded) {
      this.loadImage()
    }
  }

  checkVisibility(isVisible) {
    if (isVisible) {
      this.loadImage()
      this.setState({
        loaded: true
      })
    }
  }

  getSrcset() {
    return Object.keys(this.sizes).map(key => {
      const size = this.sizes[key];

      return `${size.url} ${size.width}w`
    }).join(', ');
  }

  loadImage() {
    this.setState({
      srcSet: this.getSrcset()
    })
  }

  render() {
    const image = (
      <img 
        id={this.props.id}
        className={this.props.className} 
        src={this.state.src}
        srcSet={this.state.srcSet}
      />
    )

    if (this.loadType === 'auto' || this.state.loaded === true) {
      return (
        <Visibility onChange={this.checkVisibility} partialVisibility={true}>
          {image}   
        </Visibility>
      )
    }

    return image
  }

}

Image.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sizes: PropTypes.object.isRequired
  }),
  size: PropTypes.string.isRequired,
  loaded: PropTypes.bool,
  loadType: PropTypes.oneOf(['manual','auto'])
}

Image.defaultProps = {
  loadType: 'auto',
  loaded: false
}