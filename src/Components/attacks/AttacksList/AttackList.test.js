import React from 'react';
import { render, screen } from '@testing-library/react';
 
import AttacksList from './AttacksList';
import { attack } from 'Components/attacks/data';

const attacks = [attack];
 
describe('AttacksList', () => {
  it('renders AttacksList component', () => {
    render(<AttacksList kind="Ataques Rápidos" attacks={attacks} />);
    expect(screen.getByText('Ataques Rápidos')).toBeInTheDocument();
    expect(screen.getByText('Power Whip')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
  });

  it('doesn\'t render anything when attacks is empty', () => {
    const { container } = render(<AttacksList kind="Ataques Rápidos" attacks={[]} />);

    expect(container.firstChild).toBeNull();
  });
});