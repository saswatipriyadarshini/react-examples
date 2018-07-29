import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import Action from './Component/Actions/Actions';
// import Login from './Component/SignUp/Index';
import ClickOption from './Component/ClickOption/ClickOption';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <div className='container'>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink exact activeClassName="activeNav" to="/App">Home</NavLink></li>
              <li><NavLink exact activeClassName="activeNav" to="/Actions">Action</NavLink></li>
              {/*<li><NavLink exact activeClassName="activeNav" to="/Index">Action</NavLink></li>*/}
              <li><NavLink exact activeClassName="activeNav" to="/ClickOption">Action</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <Route exact path='/App' component={ App }/>
      <Route exact path='/Actions' component={ Action }/>
      {/*<Route exact path='/SignUp' component={ Login }/>*/}
      <Route exact path='/ClickOption' component={ ClickOption }/>
    </div>
  </Router>
  ,document.getElementById('root'));

registerServiceWorker();
