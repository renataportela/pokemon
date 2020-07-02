import React from 'react';

import Button from './Button';

function DeleteButton(props) {
  return <Button title="Excluir" kind="ghost" round textColor="danger" icon="delete" onClick={props.onClick} />;
}

export default DeleteButton;