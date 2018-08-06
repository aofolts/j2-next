import Header from '../parts/Header';
import fetch from 'isomorphic-unfetch'
import { config } from '../config';
import Wrapper from '../parts/Wrapper'
import Layout from '../parts/Layout'
import Hero from '../parts/Hero'
import Content from '../parts/Content'
import Wrap from '../parts/Wrap'
import WpImage from '../parts/WpImage'
import Section from '../parts/Section'
import '../src/less/gallery.less'
import Intro from '../parts/Intro'

const Gallery = props => {
  const images = props.images.map(image => (
    <div className='image' key={image.id}>
      <WpImage className='background' data={image} size='medium' />
    </div>
  ))

  return (
    <Section name='gallery'>
      <Wrap>
        <div className='grid-gallery'>
          {images}
        </div>
      </Wrap>
    </Section>
  )
}

class Post extends React.Component {

  static async getInitialProps(props) {
    return {
      ...props
    }
  }

  render() {
    const props  = this.props,
          images = props.post.acf.gallery

    return (
      <Layout {...this.props}>
        <Hero title={this.props.post.title.rendered} background={this.props.post.featured_image} />
        <Gallery images={images} />
      </Layout>
    )
  }

}

export default Wrapper(Post)