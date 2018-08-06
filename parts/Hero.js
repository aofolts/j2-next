import WpImage from './WpImage'
import PropTypes from 'prop-types'

import '../src/less/hero-secondary.less'

const Hero = props => (
  <section id='hero'>
    <WpImage 
      id='hero__background' 
      data={props.background} 
      size='hero'
    />
    <div id='hero__content'>
      <h1 id='hero__headline' dangerouslySetInnerHTML={{__html:props.title}}></h1>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired
}

export default Hero