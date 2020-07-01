import React from 'react';

import Button from './Button';

function DeleteButton(props) {
  return <Button title="Excluir" kind="ghost" round textColor="red" icon="x" onClick={props.onClick} />;
}

export default DeleteButton;