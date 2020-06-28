import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Flex({ className, children, style }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

const FlexStyle = styled(Flex).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['fill'].includes(prop) && defaultValidatorFn(prop),
})(props => {
  const gapStyle = props.gap
    ? {
        '& > *:not(:first-child)': {
          marginLeft: props.gap,
        },
      }
    : {};

  return {
    alignContent: flexDisposition(props.alignContent),
    alignItems: props.centered ? 'center' : flexDisposition(props.alignItems),
    alignSelf: flexDisposition(props.alignSelf),
    display: props.inline ? 'inline-flex' : 'flex',
    flex: props.fill ? '1 1 auto' : null,
    flexDirection: props.direction,
    flexWrap: props.wrap,
    height: props.height,
    justifyContent: props.centered ? 'center' : flexDisposition(props.justify),
    textAlign: props.textAlign,
    margin: props.margin,
    padding: props.padding,
    position: props.position,
    ...gapStyle,
  };
});

const flexDisposition = option => {
  switch (option) {
    case 'around':
      return 'space-around';
    case 'auto':
      return 'auto';
    case 'baseline':
      return 'baseline';
    case 'between':
      return 'space-between';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'evenly':
      return 'space-evenly';
    case 'start':
      return 'flex-start';
    case 'stretch':
      return 'flex-stretch';
    default:
      return null;
  }
};

Flex.defaultProps = {
  alignContent: null,
  alignItems: null,
  alignSelf: null,
  direction: null,
  display: null,
  gap: null,
  height: null,
  justify: null,
  margin: null,
  padding: null,
  position: null,
  textAlign: null,
  wrap: null,
};

Flex.propTypes = {
  alignContent: PropTypes.oneOf([
    'around',
    'between',
    'center',
    'end',
    'start',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'baseline',
    'stretch',
    'start',
    'end',
    'center',
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'baseline',
    'center',
    'end',
    'start',
    'stretch',
  ]),
  centered: PropTypes.bool,
  direction: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  display: PropTypes.oneOf([
    'none',
    'inline',
    'block',
    'list-item',
    'inline-block',
    'inline-table',
    'table',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-footer-group',
    'table-header-group',
    'table-row',
    'table-row-group',
    'flex',
    'inline-flex',
    'grid',
    'inline-grid',
    'run-in',
    'inherit',
  ]),
  fill: PropTypes.string,
  gap: PropTypes.string,
  height: PropTypes.string,
  inline: PropTypes.bool,
  justify: PropTypes.oneOf([
    'around',
    'between',
    'center',
    'end',
    'evenly',
    'start',
  ]),
  margin: PropTypes.string,
  padding: PropTypes.string,
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
};

export default FlexStyle;
