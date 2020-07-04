import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { commomCssButton, normalButtonCss, primaryVariant } from 'Components/common/ui/Button/ButtonStyle';

const LinkButton = styled(Link)`
  ${commomCssButton}
  ${normalButtonCss}
  ${primaryVariant}
`;

LinkButton.defaultProps = {
  size: 'md',
};

export default LinkButton;