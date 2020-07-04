import React from 'react';

import { Svg } from 'Components/common/ui';

function XIcon({ children, ...props}) {
  return (
    <Svg {...props}>
      {children}
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </Svg>
  );
}

XIcon.defaultProps = {
  children:  null,
  viewBox: '0 0 24 24',
}

export default XIcon;