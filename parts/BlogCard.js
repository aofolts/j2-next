import Link from 'next/link'
import WpImage from '../parts/WpImage'

const BlogCard = props => {
  const {post} = props

  const href = {
    pathname: `/community/${post.slug}`,
    query: {
      slug: post.slug,
      apiRoute: 'community'
    }
  }

  return (
    <Link href={href} as={`/community/${post.slug}`}>
      <a key={post.id} className='card-community'>
        <div className='media'>
          <WpImage className='background' data={post.featured_image} size='medium' />
        </div>
        <div className='content'>
          <div className='category'>Music</div>
          <h3 className='title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h3>
          <p className='p2 excerpt'>
            {post.acf.excerpt}...<br/>
          </p>
          <p className='p2 link-text'>Read More</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard