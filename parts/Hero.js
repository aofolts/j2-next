import WpImage from './WpImage'
import PropTypes from 'prop-types'

import css from '../src/less/hero-secondary.less'

const Hero = props => (
  <section id='hero' className={css.hero}>
    <WpImage 
      className={css.background}
      data={props.background} 
      size='hero'
    />
    <div className={css.content}>
      <h1 className={css.headline} dangerouslySetInnerHTML={{__html:props.title}}></h1>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired
}

export default Hero