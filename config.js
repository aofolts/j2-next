const dev = process.env.NODE_ENV !== 'production',
      liveBackendUrl = 'http://api.joesquared.com',
      liveUrl   = 'https://www.joesquared.com',
      devUrl    = 'http://localhost/joesquared.com',
      devFrontendUrl = 'http://localhost:3000',
      backendUrl = dev ? devUrl : liveBackendUrl,
      url       = dev ? devFrontendUrl : liveUrl,
      restUrl   = backendUrl + '/wp-json',
      wpRestUrl = restUrl + '/wp/v2'

export const config = {
  url: url,
  api: {
    restUrl: restUrl,
    wpRestUrl: wpRestUrl,
    url: backendUrl,
  },
  getPostSlug: url => {
    if (typeof url === 'string') {
      return url.replace(backendUrl,'')
    } else {
      return url
    }
  }
}