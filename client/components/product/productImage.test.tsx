import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from './producImage';

it('renders the ProductImage correctly', () => {
  const tree = renderer.create(<ProductImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
