import React from 'react';

function TypeTags(props) {
  return (
    <p>
      {props.types.map(typeName => <span key={typeName}>{typeName} - </span>)}
    </p>
  );
}

export default TypeTags;