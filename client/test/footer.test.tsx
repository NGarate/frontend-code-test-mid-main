import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/footer';

test('renders the ProductDescription correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
