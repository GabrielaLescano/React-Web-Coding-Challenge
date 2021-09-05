import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import BikeDetail from './Components/BikeDetail';
import Error404 from './Components/Error404';
import Home from './Components/Home/';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/case/:id" component={BikeDetail} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
