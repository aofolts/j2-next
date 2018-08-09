import Link from 'next/link'
import WpImage from '../parts/WpImage'
import Section from '../parts/Section'
import Wrap from './Wrap'
import css from '../src/less/footer.less'

const NewsletterForm = props => (
  <form action="https://my.zenreach.com/api/widgets/submit_customer/" method="post" encType="application/x-www-form-urlencoded" target='_blank'>
    <input className={css.input} type="hidden" name="business_id" value="5a0b07627c331300095e165c"/>
    <input className={css.input} type="hidden" name="tags" value="website"/>
    <div className={css.field}>
      <label htmlFor='footer-newsletter-name'></label>
      <input className={css.input} type='text' id='footer-newsletter-name' name='fullname' placeholder='Name' />
    </div>
    <div className={css.field}>
      <label htmlFor='footer-newsletter-email'></label>
      <input className={css.input} type='email' id='footer-newsletter-email' name='email' placeholder='Email' />
    </div>
    <button type='submit' className={css.submit}>Subscribe →</button>
  </form>
)

const Newsletter = props => {
  return (
    <Section name='footer-newsletter'>
      <Wrap width='medium'>
        <div className={css.newsletterGrid}>
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
      <a key={platform} className={css.socialLink} href={social[platform].url} target='_blank'>
        <img 
          className={css.socialIcon}
          alt={`${platform}-icon`} 
          key={platform}
          src={`/static/img/icon-social-${platform}.svg`}
        />
      </a>
    )
  })

  return (
    <div id='footerBar' className={css.bar}>
      <div id='copyright' className={css.barItem}>©2018 Joe Squared</div>
        <div id='credit' className={css.barItem}>
          Site by <Link href='http://sherpadesign.co'><a id='credit-link'>Sherpa Design Co.</a></Link>
        </div>
        <div className={[css.barItem,css.social].join(' ')}>
          {icons}
        </div>
    </div>
  )
}

const Footer = props => {
  return (
    <footer id='footer' className={css.footer}>
      <Newsletter />
      <FooterBar/>
    </footer>
  )
}

export default Footer