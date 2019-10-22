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
      const ed = getByTestId('CodeEditor');
  });


});
