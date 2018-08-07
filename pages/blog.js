import {config} from '../config';
import fetch from 'isomorphic-unfetch'

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