import React from 'react';
import Menu from './models/MainMenu';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Signup from './models/SignUp';
import Login from './models/Login';
import Dance from './models/Dance';
import LandingPage from './models/LandingPage';
import NewType from './models/Newtype.jsx';
import UpdateType from './models/updateType';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
    <Menu/>
    <ToastContainer/>
    <Switch>
    <Route path="/dance/newType" component={NewType} />
    <Route path="/dance/updateType/:id" component={UpdateType} />
      <Route path="/dance/:page?" component={Dance} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={LandingPage} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
