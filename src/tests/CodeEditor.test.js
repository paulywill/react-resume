/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';
import renderer from 'react-test-renderer';
import * as sinon from "sinon";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;
Enzyme.configure({ adapter: new Adapter() });


/*
test('Renders correctly and matches snapshot', () => {
  const tree = renderer
    .create(<Provider store={store}><CodeEditor /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
*/


describe('Test updating', () => {
  const domElement = document.getElementById("app");
  const mountOptions = {
    attachTo: domElement
  };

  test("It renders", () => {
    mount(<Provider store={store}><CodeEditor /></Provider>);
  });
  

  test("Did Update", () => {
    //TO-DO: refactor so there's not so many nested const; reduce testing time
    const startValue = "start value";
    const wrapper = mount(<Provider store={store}><CodeEditor /></Provider>);
     
    // Read set value
    let editor = wrapper.instance();
    expect(editor.getValue()).to.equal(startValue);

    // Now trigger the componentDidUpdate
    const newValue = "updated value";
    wrapper.setProps({ value: newValue });
    editor = wrapper.instance().editor;
    expect(editor.getValue()).to.equal(newValue);    
  });



});
