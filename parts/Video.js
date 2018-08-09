import PropTypes from 'prop-types'

export default class Video extends React.Component {

  constructor(props) {
    super(props)

    this.getSrc = this.getSrc.bind(this)
  }

  getSrc() {
    const key = this.props.videoKey

    switch (this.props.host) {
      case 'youtube': return `https://www.youtube.com/embed/${key}`; break;
      case 'vimeo':   return `https://player.vimeo.com/video/${key}?title=0&byline=0&portrait=0`; break;
    }
  }

  render() {

    return (
      <iframe className={this.props.className || 'video'}
        src={this.getSrc()}
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
      >
      </iframe>
    )
  }

}

Video.propTypes = {
  host: PropTypes.string.isRequired,
  videoKey: PropTypes.string.isRequired
}