import PropTypes from 'prop-types'
import Visibility from 'react-visibility-sensor'

export default class Video extends React.Component {

  constructor(props) {
    super(props)

    this.getSrc = this.getSrc.bind(this)

    this.state = {
      src: null
    }
  }

  getSrc() {
    const key = this.props.videoKey

    switch (this.props.host) {
      case 'youtube': return `https://www.youtube.com/embed/${key}`; break;
      case 'vimeo':   return `https://player.vimeo.com/video/${key}?title=0&byline=0&portrait=0`; break;
    }
  }

  loadSrc() {
    this.setState({
      src: this.getSrc()
    })
  }

  render() {
    const iframe = (
      <iframe className={this.props.className || 'video'}
        src={this.state.src}
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
      />
    )

    if (!this.state.src) {
      return (
        <Visibility onChange={vis => vis && this.loadSrc()} partialVisibility={true}>
          {iframe}   
        </Visibility>
      )
    }

    return iframe
  }

}

Video.propTypes = {
  host: PropTypes.string.isRequired,
  videoKey: PropTypes.string.isRequired
}