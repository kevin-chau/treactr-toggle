import React from 'react'

class OFF extends React.Component {
  render () {
    return (
      <svg width='37' height='21' viewBox='0 0 37 21'>
        <text x='0' y='45%' fontWeight='500' fontSize='11' fill='#A9A9A9'>ON</text>
      </svg>
    )
  }
}

class OFF1 extends React.Component {
  render () {
    return (
      <svg width='21' height='23' viewBox='0 0 21 23'>
        <text x='63%' y='40%' fontWeight='500' fontSize='11' fill='#D6D6D6'>1</text>
      </svg>
    )
  }
}

class OFF2 extends React.Component {
  render () {
    return (
      <svg width='21' height='23' viewBox='0 0 21 23'>
        <text x='63%' y='40%' fontWeight='500' fontSize='11' fill='#D6D6D6'>2</text>
      </svg>
    )
  }
}

export { OFF, OFF1, OFF2 }
