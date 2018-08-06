import Header from '../parts/Header';
import fetch from 'isomorphic-unfetch'
import { config } from '../config';
import Wrapper from '../parts/Wrapper'
import Layout from '../parts/Layout'
import Hero from '../parts/Hero'
import Content from '../parts/Content'
import Wrap from '../parts/Wrap'

class Post extends React.Component {

  static async getInitialProps(props) {
    return {
      ...props
    }
  }

  render() {
    return (
      <Layout {...this.props}>
        <Hero title={this.props.post.title.rendered} background={this.props.post.featured_image} />
        <Wrap width='small'>
          <Content html={this.props.post.content.rendered} />
        </Wrap>
      </Layout>
    )
  }

}

export default Wrapper(Post)