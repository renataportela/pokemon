import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { commomCssButton, normalButtonCss, buttonVariant } from 'Components/ui/Button/ButtonStyle';

const LinkButton = styled(Link)`
  ${commomCssButton}
  ${normalButtonCss}
  ${buttonVariant}
`;

LinkButton.defaultProps = {
  size: 'md',
};

export default LinkButton;