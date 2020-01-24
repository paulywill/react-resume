/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';
import renderer from 'react-test-renderer';

it('renders correctly and matches snapshot', () => {
  const tree = renderer
    .create(<Provider store={store}><CodeEditor /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test updating', () => {
  
  jest.mock('../components/Tools/CodeEditor', () => ({
    componentDidUpdate: jest.fn(),

  }));

  test("Did Update", () => {
    
  });


});
