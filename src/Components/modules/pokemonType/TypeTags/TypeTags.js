import React from 'react';

import { Chip, Flex } from 'Components/ui';

function TypeTags({ types, ...props }) {
  return (
    <Flex gap="8px" marginBottom="15px" {...props}>
      {types.map((typeName, index) => <Chip key={index}>{typeName}</Chip>)}
    </Flex>
  );
}

export default TypeTags;