import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_1/Container'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_1')
  ReactDOM.render(<Container />, container)
})
