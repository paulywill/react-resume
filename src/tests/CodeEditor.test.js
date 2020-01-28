/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';
import AceEditor from 'react-ace';
import Resume from '../components/Resume';

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

    const { getByTestId } = render(
      <Provider store={store}><CodeEditor /></Provider>,
    );

    render(<Provider store={store}><Resume /></Provider>);


    //===============================================================================
    const wrapper = mount(<Provider store={store}><CodeEditor/></Provider>);
    let editorValue = wrapper.find(AceEditor).prop('value')
    let obj = JSON.parse(editorValue);
    expect(obj.header.name).toEqual('Your Name'); 
    obj.header.name = 'Kobe Bryant';
    expect(obj.header.name).toEqual('Kobe Bryant'); 
    editorValue = JSON.stringify(obj);
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
    expect(wrapper.find(AceEditor).prop('value')).toContain('Kobe Bryant');

    //===============================================================================


    fireEvent.click(`json-resume-editor`);
  });



});
