import React from 'react'

import Button from './Button'

function Close(props) {
  return (
    <Button icon="x" round kind="ghost" {...props} />
  )
}

Close.defaultProps = {
  textColor: 'currentColor',
}

export default Close