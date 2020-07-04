import React from 'react';

import { Container, GlobalStyles } from 'Components/common/ui';

function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      {children}
    </Container>
  )
}

export default Layout;