import styled from 'styled-components';

const Text = styled.span(props => {
  return {
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
  family: null,
  size: null,
  textAlign: null,
  transform: null,
  weight: null,
}

export default Text;
