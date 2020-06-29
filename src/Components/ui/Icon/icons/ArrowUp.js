import React from 'react'

import { Svg } from '~/components'

function ArrowUpIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </Svg>
  )
}

ArrowUpIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default ArrowUpIcon
