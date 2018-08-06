import Document, { Head, Main, NextScript } from 'next/document'
import Typekit from 'react-typekit'

// Less
import '../src/less/yetti/reset.less'
import '../src/less/style.less'

export default class Template extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='en_US'>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <Typekit kitId='dxm1wgv'/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}