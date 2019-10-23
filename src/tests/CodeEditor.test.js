/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';

//TODO: cover getDarkStatusColor(statusMessage)
//TODO: cover statusMessage
//      ref: Semantic-UI-React test spec: https://github.com/Semantic-Org/Semantic-UI-React/blob/4d0688a26a74f024249e61796a3e2bbe2886bce4/test/specs/collections/Menu/MenuItem-test.js

describe('Code Editor renders as expected with label and icon, status label, close button at the top and code editor below', () => {
  test('Container for code editor renders as expected', () => { 
      const { getByTestId } = render(
          <Provider store={store}><CodeEditor /></Provider>,
      );    
    
      // get root node created by CodeEditor
      const ce = getByTestId('CodeEditor');

      // should have class "json-resume-tool"
      expect(ce.classList).toContain('json-resume-tool');

      // should contain 1 very wide sidebar
      expect(ce.childElementCount).toBe(1);

      // first child should be a div with expected classes
      const label = ce.firstChild;
      expect(label.tagName).toBe('DIV');
      expect(label.classList).toContain('ui', 'scale', 'down', 'right', 'very', 'wide', 'sidebar');

      // first child should contain 2 nodes (top menu, editor) with expected attributes and classes
      expect(label.childNodes.length).toEqual(2);
      const [menu] = label.childNodes;
      expect(menu.tagName).toBe('DIV');
      expect(menu.classList).toContain('ui', 'massive', 'borderless', 'top', 'attached', 'menu');
      expect(menu.nodeName).toBe('DIV');
      
      // menu should have a edit icon and label on the left
      expect(menu.childElementCount).toEqual(3);
      expect(menu.childNodes[0].tagName).toEqual('DIV');
      expect(menu.childNodes[0].classList).toContain('left', 'item');
      expect(menu.childNodes[0].childElementCount).toBe(1);
      expect(menu.childNodes[0].firstChild.classList).toContain('edit', 'icon');
      expect(menu.childNodes[0].textContent).toContain('Code Editor');

      // menu should have a status message that updates when there's a change
      expect(menu.childNodes[1].tagName).toEqual('DIV');
      expect(menu.childNodes[1].classList).toContain('left', 'item');
      expect(menu.childNodes[1].nodeType).toEqual(1);

      // menu should have a close button on the right to close editor
      expect(menu.childNodes[2].tagName).toEqual('A');
      expect(menu.childNodes[2].classList).toContain('right', 'icon', 'item');
      expect(menu.childNodes[2].childElementCount).toBe(1);
      expect(menu.childNodes[2].firstChild.classList).toContain('x', 'icon');
  });


});
