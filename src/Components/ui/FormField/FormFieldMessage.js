import React from 'react';
import styled from 'styled-components';

import theme from 'Components/styles/theme';

function Message(props) {
  const color = props.kind === 'danger' ? theme.colors.danger.text : theme.colors.sub;

  return <MessageStyle $textColor={color} children={props.children} />
}

const MessageStyle = styled.p`
  font-size: 0.8rem;
  color: ${props => props.$textColor};
  margin-top: 0.4em;
  margin-bottom: 0;
`

export default Message;