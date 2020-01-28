/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';
import AceEditor from 'react-ace';

import { configure, mount, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


test('Renders correctly and matches snapshot', () => {
  const tree = renderer
    .create(<Provider store={store}><CodeEditor /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


describe('Test updating', () => {
  const domElement = document.getElementById("app");
  const mountOptions = {
    attachTo: domElement
  };

  test("It renders", () => {
    shallow(<Provider store={store}><CodeEditor /></Provider>);
  });
  

  test("Did Update", () => {
    //TO-DO: refactor so there's not so many nested const; reduce testing time
    const startValue = "start value";
    
    const wrapper = mount(<Provider store={store}><CodeEditor/></Provider>);
    let editorValue = wrapper.find(AceEditor).prop('value')
    //wrapper.find(AceEditor).setState({ 'value' : 'bar' });
    //wrapper.update();
    console.log(typeof editorValue); 

    let obj = JSON.parse(editorValue);
    console.log(obj);
    console.log('name: ' +  obj.header.name); 
    obj.header.name = 'Kobe Bryant';
    console.log('name: ' + obj.header.name); 
    editorValue = JSON.stringify(obj);
    console.log(editorValue);
    //wrapper.find(AceEditor).setState({ 'value': editorValue });
   // wrapper.find(AceEditor).setProps('children', <AceEditor 'value': editorValue />)
    wrapper.setProps({ children: 
      <AceEditor
        mode="json"
        theme={'tomorrow_night_bright'}
        name="json-resume-editor"
        enableBasicAutocompletion={false}
        enableLiveAutocompletion={false}
        value={editorValue}
        showLineNumber
        showPrintMargin={false}
        tabSize={3}
        onChange={CodeEditor.onResumeChange}
        editorProps={{
          $blockScrolling: Infinity
        }}
      /> });

    wrapper.update();
    console.log(wrapper.find(AceEditor).prop('value')); 
  });



});
