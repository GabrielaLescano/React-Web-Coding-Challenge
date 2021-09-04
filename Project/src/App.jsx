import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Home from './Components/Home.jsx';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
