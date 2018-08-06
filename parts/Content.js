import {config} from '../config'

const Content = props => {
  let html = props.html

  html = html.replace(config.backendUrl,config.url)

  return (
    <div className='content' dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

export default Content