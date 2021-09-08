/* eslint-disable no-undef */
/* // import dependencies

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react' */

// add custom jest matchers from jest-dom
import React from 'react';
import '@testing-library/jest-dom'
import Home from './Components/Home/';
import { render, screen } from "@testing-library/react";


test("renders home component", () => {
  render( <Home /> );
  const homeElement = screen.getByTestId("prueba")
  expect(homeElement).toBeInTheDocument();
});

