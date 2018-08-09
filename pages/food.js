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
import Link from 'next/link'
import '../src/less/food.less'
import menuCardStyle from '../src/less/menuCard.less'
import css from '../src/less/food.less'

const Intro = props => (
  <Section name='intro'>
    <Wrap width='small'>
      <Content html={props.content} />
    </Wrap>
  </Section>
)

const Archive = props => {
  const cats = props.categories.map(cat => {
    const image = typeof(cat.featured_image) == 'object'
    
    if (image) {
      return (
        <Link href={`/food/${cat.slug}`} key={cat.id}>
          <a className={menuCardStyle.card}>
            <div className={menuCardStyle.media}>
              <WpImage className={menuCardStyle.background} data={cat.featured_image} size='medium' />
            </div>
            <h3 className={menuCardStyle.title}>{cat.name}</h3>
          </a>
        </Link>
      )
    } else {
      return null
    }
  })

  return (
    <Section name='archive' className={css.archiveSection}>
      <Wrap width='main'>
        <div id='grid' className={css.grid}>
          {cats}
        </div>
      </Wrap>
    </Section>
  )
}

class Food extends React.Component {

  static async getInitialProps(props) {
    const catsRes = await fetch(`${config.api.wpRestUrl}/food_category?parent=0&per_page=50`),
          cats    = await catsRes.json()

    return {
      categories: cats,
      ...props
    }
  }

  render() {
    const props  = this.props
    console.log(props.url)

    return (
      <Layout {...this.props}>
        <Hero title={this.props.post.title.rendered} background={this.props.post.featured_image} />
        <Intro content={props.post.content.rendered}/>
        <Archive categories={props.categories}/>
      </Layout>
    )
  }

}

export default Wrapper(Food)