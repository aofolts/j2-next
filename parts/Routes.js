import {config} from '../config'

function getPageRoute(slug) {
  return {
    href: {
      query: {
        slug: `/${slug}`,
        apiRoute: 'pages'
      }
    },
    as: `/${slug}`
  }
}