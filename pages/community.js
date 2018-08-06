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
import '../src/less/community.less'
import BlogCard from '../parts/BlogCard'

const Intro = props => (
  <Section name='intro'>
    <Wrap width='small'>
      <Content html={props.content} />
    </Wrap>
  </Section>
)

const Blogs = props => {

  return (
    <Section name='archive-community'>
      <Wrap>
        <div className='grid-community'>
          {props.posts.map(post => (
            <BlogCard post={post} />
          ))}
        </div>
      </Wrap>
    </Section>
  )
}

class Community extends React.Component {

  static async getInitialProps(props) {
    // Recent Blog Posts
    const blogsRes = await fetch(`${config.api.wpRestUrl}/blog/?per_page=9`),
          posts    = await blogsRes.json()

    return {
      posts: posts,
      ...props
    }
  }

  render() {
    const props  = this.props

    return (
      <Layout {...props}>
        <Hero title={this.props.post.title.rendered} background={this.props.post.featured_image}/>
        <Intro content={props.post.content.rendered}/>
        <Blogs posts={props.posts}/>
      </Layout>
    )
  }

}

export default Wrapper(Community)