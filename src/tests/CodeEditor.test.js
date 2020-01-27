/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';
import renderer from 'react-test-renderer';


/*
it('renders correctly and matches snapshot', () => {
  const tree = renderer
    .create(<Provider store={store}><CodeEditor /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
*/


describe('Test updating', () => {
  
  

  test("Did Update", () => {
   //TO-DO: refactor so there's not so many nested const; reduce testing time

    const { getByTestId } = render(
      <Provider store={store}><CodeEditor /></Provider>,
    );
    // get root node created by CodeEditor
    const ce = getByTestId('CodeEditor');
    // should have class "json-resume-tool"
    expect(ce.classList).toContain('json-resume-tool');
    const label = ce.firstChild;
    const ace = label.childNodes[1];
    expect(ace.tagName).toBe('DIV');
    expect(ace).toHaveStyle(`
        padding: 10px 20px 20px 20px;  
      `);  
    const seg = ace.firstChild; 
    expect(seg.classList).toContain('segment');
    const jsonEditor = seg.firstChild;
    expect(jsonEditor.classList).toContain('ace_editor');
    const aceScroller = jsonEditor.childNodes[2];
    expect(aceScroller.classList).toContain('ace_scroller');
    const aceContent = aceScroller.firstChild;
    expect(aceContent.classList).toContain('ace_content');
    const aceTextLayer = aceContent.childNodes[2];
    expect(aceTextLayer.classList).toContain('ace_text-layer');
    const aceTextContent = aceTextLayer.textContent;
    expect(aceTextContent).toBe(null);
    /*
    
      //Rendering the component and its tree
      const { container, getByLabelText } = render(<SignupView />);
      //Extracting the child, username_input component with his accessibilityLabel
      const username_input = getByLabelText('username_input');
      const email_input = getByLabelText('email_input');
      //Fire a native changeText event with a specific value
      fireEvent.changeText(username_input, 'doe');
      fireEvent.changeText(email_input, 'doe@joe.com');
      //Checking the rendered value
      expect(username_input.props.value).toEqual('doe');
      expect(email_input.props.value).toEqual('doe@joe.com');
    
    */
    
  });


});
