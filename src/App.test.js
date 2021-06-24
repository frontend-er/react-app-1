import { render, screen } from '@testing-library/react';
import JSApp from "./App";
import ReactDOM from "react-dom";
import React from "react";


it('renders learn react link', () => {
  const div = document.createElement('div');

  ReactDOM.render(<JSApp/>,div);
  ReactDOM.unmountComponentAtNode(div);

});
