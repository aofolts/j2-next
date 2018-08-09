import Header from '../parts/Header';
import fetch from 'isomorphic-unfetch'
import { config } from '../config';
import ArchiveWrapper from '../parts/ArchiveWrapper'
import Layout from '../parts/Layout'
import Hero from '../parts/Hero'
import Content from '../parts/Content'
import Wrap from '../parts/Wrap'
import WpImage from '../parts/WpImage'
import Section from '../parts/Section'
import Link from 'next/link'
import css from '../src/less/food.less'

class MenuArchive extends React.Component {

  static async getInitialProps(props) {
    // const catsRes = await fetch(`${config.api.wpRestUrl}/food_category`),
    //       cats    = await catsRes.json()

    return {
      //categories: cats,
      ...props
    }
  }

  constructor(props) {
    super(props)

    const boundMethods = [
      'getNavSection',
      'getItemsSection',
      'setSelectedCategoryById'
    ]
      
    boundMethods.forEach(method => this[method] = this[method].bind(this))
  
    this.state = {
      selectedCategoryId: props.subCategories[0].id
    }
  }

  getItemsSection() {
    const items = this.props.foodMenuItems.map(item => {
      const isSelected = (item.food_category.includes(this.state.selectedCategoryId)),
            itemClasses   = [
              css.item,
              isSelected ? css.selectedItem : null
            ].join(' ')

      let pricing = null

      if (item.acf.pricing) {
        const nonZeroPrices = item.acf.pricing.filter(level => level.price > 0)
        
        if (nonZeroPrices) {
          pricing = (
            <p className='pricing p2'>
              {nonZeroPrices.map(level => {
                return [level.label,'$' + level.price].join(' ')
              }).join(', ')}
            </p>
          )
        }
      }

      return (
        <li 
          key={item.id} 
          className={itemClasses}
          >
          <h3 className='title' dangerouslySetInnerHTML={{__html:item.title.rendered}}></h3>
          <p className='description' dangerouslySetInnerHTML={{__html:item.acf.description}}></p>
          {pricing}
        </li>
      )
    })

    return (
      <Section name='items' className={css.itemsSection}>
        <Wrap>
          <ul id='items' className={css.items}>
            {items}
          </ul>
        </Wrap>
      </Section>
    )
  }

  getNavSection() {
    const items = this.props.subCategories.map(cat => {
      const isSelected  = (cat.id === this.state.selectedCategoryId),
            itemClasses = [
              css.navItem,
              isSelected ? css.selectedNavItem : null
            ].join(' ')

      return (
        <li 
          key={cat.id} 
          className={itemClasses}
          onClick={() => this.setSelectedCategoryById(cat.id)}
          >
          {cat.name}
        </li>
      )
    })

    // Link to Build Your Own Pizza
    if (this.props.category.id === 24) {
      const diyHref = {
        pathname: '/build-your-own-pizza',
        query: {
          slug: '/build-your-own-pizza',
          apiRoute: 'pages'
        }
      }
  
      items.push(
        <li 
          key='diy' 
          className={css.navItem}
          >
          <Link href={diyHref} as={diyHref.query.slug}>
            <a>Build Your Own</a>
          </Link>
        </li>
      )
    }

    const catDescriptions = this.props.subCategories
      .filter(cat => typeof(cat.description) !== 'undefined')
      .map(cat => {
        const style = {
          display: (cat.id === this.state.selectedCategoryId) ? 'block' : 'none',
        }

        return <li key={cat.id} className='description' style={style}>{cat.description}</li>
      })

    const subCatInfo = catDescriptions ? <p>{catDescriptions}</p> : null

    const catInfo = this.props.category.description 
      ? <p>{this.props.category.description}</p> 
      : null

    const menusHref = {
      slug: '/food',
      query: {
        slug: '/food',
        apiRoute: 'pages'
      }
    }

    const breadCrumbs = (
      <p className={css.breadCrumbs}>
        <Link href={menusHref} as={menusHref.slug}>
          <a>Food</a>
        </Link> > <span>{this.props.category.name}</span>
      </p>
    )

    const info = (catInfo || subCatInfo) ?
      (
        <div className={css.info}>
          {catInfo}
          {breadCrumbs}
          {subCatInfo}
        </div>
      ) : null

    return (
      <Section name='nav' className={css.navSection}>
        <Wrap width='small'>
          <div>
            <ul id='nav-food' className={css.foodNav}>
              {items}
            </ul>
          </div>
          {info}
        </Wrap>
      </Section>
    )
  }

  setSelectedCategoryById(id) {
    if (id !== this.state.selectedCategoryId) {
      this.setState({
        selectedCategoryId: id
      })
    }
  }

  render() {
    const props  = this.props

    return (
      <Layout {...props}>
        <Hero title={this.props.title} background={this.props.featuredImage}/>
        {this.getNavSection()}
        {this.getItemsSection()}
      </Layout>
    )
  }

}

export default ArchiveWrapper(MenuArchive)