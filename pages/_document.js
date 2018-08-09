import Document, { Head, Main, NextScript } from 'next/document'
import Typekit from 'react-typekit'

export default class Template extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() { 
    return (
      <html lang='en_US' >
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
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