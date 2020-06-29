import React from 'react'

import { Svg } from '~/components'

function ChevronLeftIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <polyline points="15 18 9 12 15 6"></polyline>
    </Svg>
  )
}

ChevronLeftIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default ChevronLeftIcon
