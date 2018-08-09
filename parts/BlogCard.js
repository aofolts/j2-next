import Link from 'next/link'
import WpImage from '../parts/WpImage'
import css from '../src/less/blogCard.less'

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
        <div className={css.media}>
          <WpImage className='mediaBackground' data={post.featured_image} size='medium' />
        </div>
        <div className={css.content}>
          <div className={css.category}>Music</div>
          <h3 className={css.title} dangerouslySetInnerHTML={{__html: post.title.rendered}}></h3>
          <p className={['p2',css.excerpt].join(' ')}>
            {post.acf.excerpt}...<br/>
          </p>
          <p className='p2 link-text'>Read More</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard