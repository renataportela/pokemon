import React from 'react';
import { render, screen } from '@testing-library/react';
 
import AttackCard from './AttackCard';
import { attack } from 'Components/attacks/data';
 
describe('AttackCard', () => {
  it('renders AttackCard component', () => {
    render(<AttackCard attack={attack} />);

    expect(screen.getByText('Power Whip')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
  });
});