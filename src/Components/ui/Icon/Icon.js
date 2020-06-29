import React from 'react'
import PropTypes from 'prop-types'

import * as Icons from './icons'

function Icon({ children, name, ...props }) {
  const ChosenIcon = Icons[ICON_COMPONENTS[name]];

  if (!ChosenIcon) return null;
  
  return <ChosenIcon {...props}>{children}</ChosenIcon>
}

Icon.defaultProps = {
  children: null,
}

Icon.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
}

const ICON_COMPONENTS = {
  'arrow-up': 'ArrowUp',
  'chevron-left': 'ChevronLeft', 
  loader: 'Loader',
  x: 'X',
}

Object.keys(ICON_COMPONENTS).forEach(name => {
  const compName = ICON_COMPONENTS[name]
  Icon[compName] = Icons[compName]
})

export default Icon
