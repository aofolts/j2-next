import {config} from '../config';
import Header from '../parts/Header';
import fetch from 'isomorphic-unfetch'
import Wrap from '../parts/Wrap'
import WpImage from '../parts/WpImage'
import Button from '../parts/Button'
import Section from '../parts/Section'
import Slider from '../parts/Slider'
import FeaturedTabs from '../parts/FeaturedTabs'
import Video from '../parts/Video'

export default class Blog extends React.Component {

  static async getInitialProps(context) {
    const {slug} = context.query

    const postRes = await fetch(`${config.api.wpRestUrl}/community/?slug=reservoir-hill-improvement-council-pizza-copy`),
          post    = await postRes.json()

    return {
      post: post[0]
    }
  }

  constructor(props) {
    super(props)
  
    
  }

  render() {
    const {title} = this.props.post
    return (
      <div id='page'>
        <h1>{title.rendered}</h1>
      </div>
    )
  }

}