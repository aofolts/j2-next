import Header from '../parts/Header';
import fetch from 'isomorphic-unfetch'
import Wrap from '../parts/Wrap'
import WpImage from '../parts/WpImage'
import Button from '../parts/Button'
import Section from '../parts/Section'
import Slider from '../parts/Slider'
import { config } from '../config';
import FeaturedTabs from '../parts/FeaturedTabs'
import Video from '../parts/Video'
import Link from 'next/link'
import Layout from '../parts/Layout'
import BlogCard from '../parts/BlogCard'

import '../src/less/home.less'
import Wrapper from '../parts/Wrapper';

const IntroSection = props => (
  <section id='section-intro'>
    <Wrap width='small'>
      <h2>{props.fields.headline}</h2>
      <div className='copy' dangerouslySetInnerHTML={{__html: props.fields.copy}}></div>
    </Wrap>
  </section>
)

const VideoSection = props => (
  <Section name='video'>
    <Wrap width='medium'>
      <Video videoKey='44662050' host='vimeo' />
    </Wrap>
  </Section>
)

const MenusSection = props => {
  const fields = props.fields

  return (
    <Section name='menus'>
      <div className='content'>
        <Wrap width='small'>
          <h2>{fields.headline}</h2>
          <div className='copy' dangerouslySetInnerHTML={{__html: fields.copy}}></div>
        </Wrap>
      </div>
      <Wrap width='main'>
        <div className='grid-menus'>
          {fields.list.map(post => (
            <Link href={`/${post.slug}`} key={post.id}>
              <a className='card'>
                <WpImage className='background' data={post.featured_image} size='medium' />
                <h3 className='title'>{post.title.rendered}</h3>
              </a>
            </Link>
          ))}
        </div>
      </Wrap>
    </Section>
  )
}

const CommunitySection = props => {
  const fields = props.fields

  return (
    <Section name='community'>
      <Wrap width='small'>
        <h2>{fields.headline}</h2>
        <div className='copy' dangerouslySetInnerHTML={{__html: fields.copy}}></div>
      </Wrap>
      <Wrap>
        <div className='grid-community'>
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

    // Hero Slides
    const slides = await Promise.all(
      post.acf.hero_slides.map(async postId => {
      const res = await fetch(`${config.api.wpRestUrl}/slides/` + postId + '?_embed')
      return res.json()
    }))

    // Location Info
    const locationRes = await fetch(`${config.api.restUrl}/acf/v3/options/location`),
          location    = await locationRes.json(),
          hours       = await location.acf.hours
    
    const featuredMenus = {
      headline: post.acf.menus.headline,
      copy: post.acf.menus.copy
    }

    featuredMenus.list = await Promise.all(
      post.acf.menus.list.map(async postId => {
      const res = await fetch(`${config.api.wpRestUrl}/pages/` + postId + '?_embed')
      return res.json()
    }))

    // Recent Blog Posts
    const blogsRes = await fetch(`${config.api.wpRestUrl}/blog/?per_page=3`),
          blogs    = await {
            headline: post.acf.community.headline,
            copy: post.acf.community.copy,
            list: await blogsRes.json()
          }
    
    return {
      ...props,
      slides: slides,
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
          <Section name='featured_tabs'>
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