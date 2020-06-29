import React from 'react'

import { Icon } from '~/components'
import { ICON_NAMES } from '~/constants'

export default {
  title: 'Icon',
}

export const icons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {ICON_NAMES.map(iconName => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            margin: '5px 10px 5px 0',
            width: '90px',
            padding: '15px 0 0',
          }}
        >
          <Icon color="primary" name={iconName} />
          <small>{iconName}</small>
        </div>
      ))}
    </div>
  )
}

export const test = () => {
  return (
    <>
      <Icon name="activity" />
      <Icon name="loader" color="info" width="48" height="48" />
      <Icon name="arrow-up" fill="#c00" stroke="#0f9" strokeWidth="4" />
    </>
  );
}