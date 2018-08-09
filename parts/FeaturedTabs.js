import Link from 'next/link'
import css from '../src/less/tabSorter.less'

export default class FeaturedTabs extends React.Component {

  constructor(props) {
    super(props)

    this.changeTab = this.changeTab.bind(this)

    const dotw = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]

    const date     = new Date(),
          todayKey = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()

    const HoursText = props => {
      const fields = props.fields,
            day    = fields.day.charAt(0).toUpperCase() + fields.day.slice(1)

      if (fields.is_open) {
        return (
          <div className='day'>
            {`${day}: ${fields.opens} - ${fields.closes}.`}
          </div>
        )
      } else {
        return (
          <div>{day}: Closed.</div>
        )
      }
    }

    const hours = dotw.map(key => (
      <div key={key} className='day'>
        <HoursText fields={props.hours[key]} />
      </div>
    ))

    const openTable = (
      <p>Book on <a target='__blank' href={this.props.location.open_table_link}>Open Table</a></p>
    )

    const visit = (
      <p>
        <span>{this.props.location.address}</span><br/>
        <span>Phone: {this.props.location.phone}</span><br/>
        <span>Fax: {this.props.location.fax}</span><br/>
        <span>
          More <Link href='/visit'>
            <a target='__blank'>Location Info</a>
          </Link>
        </span>
      </p>
    )

    const items = [
      {
        title: 'Today',
        content: <HoursText fields={props.hours[todayKey]} />
      },
      {
        title: 'Hours',
        content: hours
      },
      {
        title: 'Visit',
        content: visit
      },
      {
        title: 'Reserve a Table',
        content: openTable
      }
    ]

    this.state = {
      items: items,
      activeTab: 0,
      todayKey: todayKey
    }
  }

  changeTab(index) {
    this.setState({
      activeTab: index
    })
  }

  render() {
    return (
      <div className={css.sorter}>
        <nav className={css.nav}>
          {this.state.items.map((item,i) => {
            const itemClasses = [
              css.navItem,
              i == this.state.activeTab ? css.selectedNavItem : null
            ].join(' ')

            return (
              <div className={itemClasses} key={i} onClick={() => this.changeTab(i)}>
                {item.title}
              </div>
            )
          })}
        </nav>
        <div className={css.items}>
          {this.state.items.map((item,i) => {
            const itemClasses = [
              css.item,
              i == this.state.activeTab ? css.selectedItem : null
            ].join(' ')

            return (
              <div className={itemClasses} key={i}>
                {item.content}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}