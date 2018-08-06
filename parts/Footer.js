import Link from 'next/link'
import WpImage from '../parts/WpImage'
import Section from '../parts/Section'
import Wrap from './Wrap'

const NewsletterForm = props => (
  <form action="https://my.zenreach.com/api/widgets/submit_customer/" method="post" encType="application/x-www-form-urlencoded" target='_blank'>
    <input type="hidden" name="business_id" value="5a0b07627c331300095e165c"/>
    <input type="hidden" name="tags" value="website"/>
    <div className='field'>
      <label htmlFor='footer-newsletter-name'></label>
      <input type='text' id='footer-newsletter-name' name='fullname' placeholder='Name' />
    </div>
    <div className='field'>
      <label htmlFor='footer-newsletter-email'></label>
      <input type='email' id='footer-newsletter-email' name='email' placeholder='Email' />
    </div>
    <button type='submit' className='submit'>Subscribe →</button>
  </form>
)

const Newsletter = props => {

  return (
    <Section name='footer-newsletter'>
      <Wrap width='medium'>
        <div className='container-newsletter'>
          <div className='content'>
            <h2>Stay in the Know</h2>
            <p>Sign up for our weekly newsletter for the latest on upcoming shows, events, sweet deals, and tasty recipes from Joe. </p>
          </div>
          <div className='form'>
            <NewsletterForm/>
          </div>
        </div>
      </Wrap>
    </Section>
  )
}

const FooterBar = props => {
  const social = {
    facebook: {
      url: 'https://www.facebook.com/joesquared'
    },
    twitter: {
      url: 'https://twitter.com/joesquared'
    },
    instagram: {
      url: 'https://www.instagram.com/joesquaredpizza'
    }
  }

  const icons = Object.keys(social).map(platform => {

    return (
      <a className='link' href={social[platform].url} target='_blank'>
        <img 
          className='icon' 
          alt={`${platform}-icon`} 
          key={platform}
          src={`/static/img/icon-social-${platform}.svg`}
        />
      </a>
    )
  })

  return (
    <div id='footer-bar'>
      <div id='copyright' className='item'>©2018 Joe Squared</div>
        <div id='credit' className='item'>
          Site by <Link href='http://sherpadesign.co'><a id='credit-link'>Sherpa Design Co.</a></Link>
        </div>
        <div className='item social'>
          {icons}
        </div>
    </div>
  )
}

const Footer = props => {


  return (
    <footer id='footer'>
      <Newsletter />
      <FooterBar/>
    </footer>
  )
}

export default Footer