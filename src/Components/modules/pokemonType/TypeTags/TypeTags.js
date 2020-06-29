import React from 'react';

import { Chip, Flex } from 'Components/ui';

function TypeTags(props) {
  return (
    <Flex gap="8px" marginBottom="15px">
      {props.types.map(typeName => <Chip key={typeName}>{typeName}</Chip>)}
    </Flex>
  );
}

export default TypeTags;