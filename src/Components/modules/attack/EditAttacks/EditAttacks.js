import React from 'react';

function EditAttack({ title, attacks, onUpdate }) {

  const handleChange = (attribute, currentAttack) => e => {
    const _attacks = [...attacks];
    const index = _attacks.findIndex(attack => attack.name === currentAttack);
    _attacks[index][attribute] = e.target.value;
    onUpdate(_attacks);
  }

  const handleAdd = () => onUpdate([...attacks, {
    name: '',
    type: '',
    damage: '',
    __typename: "Attack",
  }]);

  const handleDelete = currentAttack => () => {
    onUpdate(attacks.filter(o => o.name !== currentAttack));
  }

  return (
    <>
      <h3>{title}</h3>

      {attacks.map((attack, index) => {
        const { name } = attack;

        return (
          <div key={index}>
            <button type="button" onClick={handleDelete(name)}>excluir</button>
            <input type="text" placeholder="Nome do Ataque" value={name} onChange={handleChange('name', name)} /> 
            <input type="text" placeholder="Tipo do Ataque" value={attack.type} onChange={handleChange('type', name)} /> 
            <input type="text" placeholder="Damagem do Ataque" value={attack.damage} onChange={handleChange('damage', name)} /><br />
          </div>
        );
      })}

      <button type="button" onClick={handleAdd}>Incluir Ataque</button><br />
    </>
  );
}

export default EditAttack;