import Button from './Button'
import WpImage  from '../parts/WpImage' 

class Slide extends React.Component {

  constructor(props) {
    super(props)

    this.getSlideClass = this.getSlideClass.bind(this)

    this.state = {
      slideClass: this.getSlideClass()
    }
  }

  getSlideClass() {
    return 'slide ' + this.props.slideState
  }

  componentWillReceiveProps(props) {
    this.setState({
      slideClass: 'slide ' + props.slideState
    })
  }

  render() {
    const slide    = this.props.slide,
          image    = slide.featured_image

    const imageEl = (
      <WpImage 
        className='background' 
        data={image} size='hero' 
        loadType='auto' 
      />
    )

    return (
      <div className={this.state.slideClass} key={slide.id} title={slide.title.rendered}>
        {imageEl}
        <div className='content'>
          <h2 className='headline'>{slide.acf.headline}</h2>
          <Buttons link='test' fields={slide.acf} />
        </div>
      </div>
    )
  }

}

const Buttons = (props) => {
  const buttons = [props.fields.button]

  if ('secondary_button' in props.fields) {
    buttons.push(props.fields.secondary_button)
  }

  return (
    <div className='buttons'>
      {buttons.map((button,i) => {
        return (
          <Button 
            key={i}
            label={button.label} 
            className={`button-primary button-${i + 1}`} 
            link={button.link} 
          />
        )
      })}
    </div>
  )
}

export default class Slider extends React.Component {

  constructor(props) {
    super(props)

    const boundMethods = [
      'advanceSlider',
      'getNextSlideById',
      'getPreviousSlideById',
      'getSlideById',
      'getSlideByIndex',
      'getSlideElements',
      'getSlideStateClassById',
      'selectSlideById',
      'startLoop'
    ]

    boundMethods.forEach(method => this[method] = this[method].bind(this))

    const slidesById = this.props.slides.reduce((obj,slide,i) => {
      slide.index   = i
      obj[slide.id] = slide

      return obj
    },{})

    const slideCount = this.props.slides.length

    this.state = {
      slidesById: slidesById,
      slideCount: this.props.slides.length,
      previousSlide: slidesById[this.props.slides[slideCount -2].id],
      currentSlide: slidesById[this.props.slides[slideCount -1].id],
      nextSlide: slidesById[this.props.slides[0].id]
    }
  }

  advanceSlider() {
    const newCurrent = this.state.nextSlide

    this.setState({
      previousSlide: this.state.currentSlide,
      currentSlide: newCurrent,
      nextSlide: this.getNextSlideById(newCurrent.id)
    })
  }

  getNextSlideById(id) {
    let i = this.state.slidesById[id].index + 1

    if (i >= this.state.slideCount) {
      i = 0
    }

    return this.getSlideByIndex(i)
  }

  getPreviousSlideById(id) {
    let i = this.state.slidesById[id].index - 1

    if (i < 0) {
      i = this.state.slideCount - 1
    }

    return this.getSlideByIndex(i)
  }

  getSlideById(id) {
    return this.state.slidesById[id]
  }

  getSlideByIndex(i) {
    const id = this.props.slides[i].id
    return this.state.slidesById[id]
  }

  componentDidMount() {
    this.startLoop()
  }

  componentWillUnmount() {
    this.stopLoop()
  }
  

  getSlideElements() {
    const self = this

    return self.props.slides.map(slide => {
      const stateClass = self.getSlideStateClassById(slide.id)

      return (
        <Slide slide={slide} key={slide.id} slideState={stateClass} />
      )
    })
  }

  getSlideNav() {
    return (
      <nav className='nav'>
        {this.props.slides.map(slide => {
          const stateClass = this.getSlideStateClassById(slide.id)

          return (
            <div key={slide.id} className={`item ${stateClass}`} onClick={() => this.selectSlideById(slide.id)} title={slide.title.rendered}>
              <div className='icon'></div>
              <div className='title'>{slide.title.rendered}</div>
            </div>
          )
        })}
      </nav>
    )
  }

  getSlideStateClassById(id) {
    let slideState = null;
    switch (id) {
      case this.state.previousSlide.id: slideState = 'previous'; break;
      case this.state.currentSlide.id: slideState = 'current'; break;
      default: slideState = 'inactive';
    }
    return 'is-' + slideState
  }

  selectSlideById(id) {
    this.stopLoop()

    this.setState({
      previousSlide: this.state.currentSlide,
      currentSlide: this.getSlideById(id),
      nextSlide: this.getNextSlideById(id)
    })
  }

  startLoop() {
    this.advanceSlider()

    this.timer = setInterval(() => {
      this.advanceSlider()
    },4000);
  }

  stopLoop() {
    clearTimeout(this.timer)
  }

  render() {
    return (
      <section id='slider'>
        {this.getSlideElements()}
        {this.getSlideNav()}
      </section>
    )
  }

}

