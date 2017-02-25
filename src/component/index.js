import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'
import ON from './on'
import OFF from './off'
import { pointerCoord } from './util'

class Toggle extends PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleFocus = this.setState.bind(this, { hasFocus: true }, () => {})
    this.handleBlur = this.setState.bind(this, { hasFocus: false }, () => {})
    this.previouslyChecked = !!(props.checked || props.defaultChecked)
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick (event) {
    const checkbox = this.input
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    this.setState({checked: checkbox.checked})
  }

  handleTouchStart (event) {
    this.startX = pointerCoord(event).x
    this.activated = true
  }

  handleTouchMove (event) {
    if (!this.activated) return
    this.moved = true

    if (this.startX) {
      let currentX = pointerCoord(event).x
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false })
        this.startX = currentX
        this.activated = true
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true })
        this.startX = currentX
        this.activated = (currentX < this.startX + 5)
      }
    }
  }

  handleTouchEnd (event) {
    if (!this.moved) return
    const checkbox = this.input
    event.preventDefault()

    if (this.startX) {
      let endX = pointerCoord(event).x
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      }

      this.activated = false
      this.startX = null
      this.moved = false
    }
  }

  getIcon (type) {
    const { icons } = this.props
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type]
  }

  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('treactr-toggle', {
      'treactr-toggle--checked': this.state.checked,
      'treactr-toggle--focus': this.state.hasFocus,
      'treactr-toggle--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <div className='treactr-toggle-track'>
          <div className='treactr-toggle-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='treactr-toggle-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className='treactr-toggle-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='treactr-toggle-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'

Toggle.defaultProps = {
  icons: {
    checked: <ON />,
    unchecked: <OFF />,
  },
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
}

class Kill extends Toggle {
  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('treactr-kill', {
      'treactr-kill--checked': this.state.checked,
      'treactr-kill--focus': this.state.hasFocus,
      'treactr-kill--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <div className='treactr-kill-track'>
          <div className='treactr-kill-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='treactr-kill-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className='treactr-kill-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='treactr-kill-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

export { Toggle, Kill }
