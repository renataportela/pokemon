import styled from 'styled-components';

import { textBgColors } from 'Components/styles/mixins';

const Text = styled.span(props => {
  return {
    ...textBgColors(props),
    fontFamily: props.family,
    fontSize: props.size,
    fontStyle: props.italic ? 'italic' : null,
    fontWeight: props.weight || (props.bold ? 'bold' : null),
    textAlign: props.textAlign,
    textTransform: textTransform(props),
    textDecoration: textDecoration(props),
  }
})

function textDecoration(props) {
  if (props.underline) return 'underline';
  if (props.line) return 'line-through';
  return null;
}

function textTransform(props) {
  if (props.upper) return 'uppercase';
  if (props.lower) return 'lowercase';
  if (props.capitalize) return 'capitalize';
  return null;
}

Text.defaultProps = {
  bgColor: null,
  family: null,
  size: null,
  textAlign: null,
  textColor: 'currentColor',
  transform: null,
  weight: null,
}

export default Text;
