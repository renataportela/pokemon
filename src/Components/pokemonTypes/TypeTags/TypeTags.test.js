import React from 'react';
import { render } from '@testing-library/react';
 
import TypeTags from './TypeTags';

const types = ['Grass', 'Poison'];
 
describe('TypeTags', () => {
  it('renders TypeTags component', () => {
    render(<TypeTags types={types} />);
  });
});