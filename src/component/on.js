import React from 'react'

class ON extends React.Component {
  render () {
    return (
      <svg width='37' height='21' viewBox='0 0 37 21'>
        <text x='0' y='45%' fontWeight='500' fontSize='11' fill='#34230B'>ON</text>
      </svg>
    )
  }
}

class ON1 extends React.Component {
  render () {
    return (
      <svg width='21' height='23' viewBox='0 0 21 23'>
        <text x='63%' y='40%' fontWeight='500' fontSize='11' fill='#34230B'>1</text>
      </svg>
    )
  }
}

class ON2 extends React.Component {
  render () {
    return (
      <svg width='21' height='23' viewBox='0 0 21 23'>
        <text x='63%' y='40%' fontWeight='500' fontSize='11' fill='#34230B'>2</text>
      </svg>
    )
  }
}

class ON_MONITOR_CUE extends React.Component {
  render () {
    return (
      <svg width='33' height='24' viewBox='0 0 33 24'>
        <g transform='translate(-6,20.000000) scale(0.100000,-0.100000)'
          fill='#34230B' stroke='none'>
          <path d='M102 184 c-27 -18 -29 -66 -6 -112 20 -42 34 -40 34 3 0 27 -5 38
        -21 43 -20 8 -20 8 -1 32 27 33 87 33 114 0 19 -24 19 -24 -1 -32 -16 -5 -21
        -16 -21 -43 0 -43 14 -45 34 -3 38 75 10 128 -69 128 -22 0 -51 -7 -63 -16z' />
        </g>
      </svg>
    )
  }
}

export { ON, ON1, ON2, ON_MONITOR_CUE }
