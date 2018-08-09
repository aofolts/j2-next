import Header from '../parts/Header';
import fetch from 'isomorphic-unfetch'
import Wrap from '../parts/Wrap'
import WpImage from '../parts/WpImage'
import Section from '../parts/Section'
import Slider from '../parts/Slider'
import { config } from '../config';
import FeaturedTabs from '../parts/FeaturedTabs'
import Video from '../parts/Video'
import Link from 'next/link'
import Layout from '../parts/Layout'
import BlogCard from '../parts/BlogCard'
import Wrapper from '../parts/Wrapper';
import css from '../src/less/home.less'

const IntroSection = props => (
  <Section name='intro'>
    <Wrap width='small'>
      <h2>{props.fields.headline}</h2>
      <div className='copy' dangerouslySetInnerHTML={{__html: props.fields.copy}}></div>
    </Wrap>
  </Section>
)

const VideoSection = props => (
  <Section name='video' className={css.videoSection}>
    <Wrap width='medium'>
      <div className={css.videoContainer}>
        <Video videoKey='44662050' host='vimeo' className={css.video}/>
      </div>
    </Wrap>
  </Section>
)

const MenusSection = props => {
  const fields = props.fields

  const menus = fields.list.map(post => {
    const href = {
      pathname: `/${post.slug}`,
      query: {
        slug: `/${post.slug}`,
        apiRoute: 'pages'
      }
    }

    return (
      <Link href={href} as={href.pathname} key={post.ID}>
        <a className={css.menuCard}>
          <WpImage className={css.menuCardBackground} data={post.featuredImage} size='medium' />
          <h3 className={css.menuCardTitle}>{post.post_title}</h3>
        </a>
      </Link>
    )
  })

  return (
    <Section name='menus' className={css.menusSection}>
      <div className={css.menusContent}>
        <Wrap width='small'>
          <h2>{fields.headline}</h2>
          <div className={css.menusCopy} dangerouslySetInnerHTML={{__html: fields.copy}}></div>
        </Wrap>
      </div>
      <Wrap width='main'>
        <div className={[css.thirdsGrid,css.menusGrid].join(' ')}>
          {menus}
        </div>
      </Wrap>
    </Section>
  )
}

const CommunitySection = props => {
  const fields = props.fields

  return (
    <Section name='community' className={css.communitySection}>
      <Wrap width='small'>
        <h2>{fields.headline}</h2>
        <div className='copy' dangerouslySetInnerHTML={{__html: fields.copy}}></div>
      </Wrap>
      <Wrap>
        <div className={[css.communityGrid,css.thirdsGrid].join(' ')}>
          {fields.list.map(post => (
              <BlogCard key={post.id} post={post}/>
          ))}
        </div>
      </Wrap>
    </Section>
  )
}

class Index extends React.Component {

  static async getInitialProps(props) {
    const post = props.post

    // Location Info
    const locationRes = await fetch(`${config.api.restUrl}/acf/v3/options/location`),
          location    = await locationRes.json(),
          hours       = await location.acf.hours
    
    const featuredMenus = {
      headline: post.acf.menus.headline,
      copy: post.acf.menus.copy,
      list: post.acf.menus.list
    }

    // Recent Blog Posts
    const blogsRes = await fetch(`${config.api.wpRestUrl}/blog/?per_page=3`),
          blogs    = await {
            headline: post.acf.community.headline,
            copy: post.acf.community.copy,
            list: await blogsRes.json()
          }
    
    return {
      ...props,
      slides: post.acf.hero_slides,
      hours: hours,
      introFields: post.acf.intro,
      location: location.acf,
      featuredMenus: featuredMenus,
      blog: blogs
    }
  }

  render() {
    return (
      <div id='page'>
        <Layout {...this.props}>
          <Slider slides={this.props.slides} />
          <IntroSection fields={this.props.introFields} />
          <Section name='featuredTabs' className={css.featuredTabsSection}>
            <Wrap>
              <FeaturedTabs hours={this.props.hours} location={this.props.location} />
            </Wrap>
          </Section>
          <VideoSection/>    
          <MenusSection fields={this.props.featuredMenus} />   
          <CommunitySection fields={this.props.blog} />
        </Layout>
      </div>
    )
  }

}

export default Wrapper(Index)