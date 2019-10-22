/* eslint-disable */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import CodeEditor from '../components/Tools/CodeEditor';



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
      
      // menu should have a left label, status mext, and a close button 
      expect(menu.childElementCount).toEqual(3);
      expect(menu.firstChild.tagName).toEqual('DIV');
      expect(menu.firstChild.classList).toContain('left', 'item');
      expect(menu.firstChild.childElementCount).toBe(1);
      expect(menu.firstChild.firstChild.classList).toContain('edit', 'icon')
      expect(menu.firstChild.firstChild.nodeValue).toContain('Code Editor')
  });


});
