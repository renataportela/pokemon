import React from 'react';
import PropTypes from 'prop-types';

import { Chip, Flex } from 'Components/common/ui';

function TypeTags({ justify, types }) {
  return (
    <Flex gap="8px" marginBottom="15px" justify={justify}>
      {types.map((typeName, index) => <Chip key={index}>{typeName}</Chip>)}
    </Flex>
  );
}

TypeTags.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypeTags;