import React from 'react';
import renderer from 'react-test-renderer';
import ProductDescription from '../components/product/description';
import ProductImage from '../components/product/image';
import ProductMain from '../components/product/image';
import ProductSpecs from '../components/product/specs';

test('renders the ProductDescription correctly', () => {
  const tree = renderer.create(<ProductDescription />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the ProductImage correctly', () => {
  const tree = renderer.create(<ProductImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the ProductMain correctly', () => {
  const tree = renderer.create(<ProductMain />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the ProductSpecs correctly', () => {
  const tree = renderer.create(<ProductSpecs />).toJSON();
  expect(tree).toMatchSnapshot();
});
