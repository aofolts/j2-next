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
import '../src/less/food.less'

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
      const selectedClass = (item.food_category.includes(this.state.selectedCategoryId)) ? 'is-selected' : null,
            classes       = ['item',selectedClass].join(' ')

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
          className={classes}
          >
          <h3 className='title' dangerouslySetInnerHTML={{__html:item.title.rendered}}></h3>
          <p className='description' dangerouslySetInnerHTML={{__html:item.acf.description}}></p>
          {pricing}
        </li>
      )
    })

    return (
      <Section name='items'>
        <Wrap>
          <ul id='items'>
            {items}
          </ul>
        </Wrap>
      </Section>
    )
  }

  getNavSection() {
    const items = this.props.subCategories.map(cat => {
      const selectedClass = (cat.id === this.state.selectedCategoryId) ? 'is-selected' : null,
            classes       = ['category',selectedClass].join(' ')

      return (
        <li 
          key={cat.id} 
          className={classes}
          onClick={() => this.setSelectedCategoryById(cat.id)}
          >
          {cat.name}
        </li>
      )
    })

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

    const info = (catInfo || subCatInfo) ?
      (
        <div id='info'>
          {catInfo}
          {subCatInfo}
        </div>
      ) : null

    return (
      <Section name='nav'>
        <Wrap width='small'>
          <div>
            <ul id='nav-food'>
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