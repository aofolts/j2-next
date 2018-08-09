import Wrapper from '../parts/Wrapper'
import Layout from '../parts/Layout'
import Hero from '../parts/Hero'
import Wrap from '../parts/Wrap'
import WpImage from '../parts/WpImage'
import Section from '../parts/Section'
import css from '../src/less/gallery.less'

const Gallery = props => {
  const images = props.images.map(image => (
    <div className={css.image} key={image.id}>
      <WpImage className={css.background} data={image} size='medium' />
    </div>
  ))

  return (
    <section id='section-gallery'>
      <Wrap>
        <div className={css.grid}>
          {images}
        </div>
      </Wrap>
    </section>
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