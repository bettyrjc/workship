import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Users from './components/users/Users';
import User from './components/users/User';
import EditUser from './components/users/EditUser';

import EditComment from './components/comments/EditComment';
import Comments from './components/comments/Comments';
import NewComment from './components/comments/NewComment';
import Comment from './components/comments/Comment';

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <React.Fragment>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/usuarios" component={Users} />
              <Route exact path="/usuarios/:id" component={User} />
              <Route exact path="/usuarios/edit/:id" component={EditUser} />
              </Switch>
              <Switch>
              <Route exact path="/comentarios" component={Comments} />
              <Route exact path="/comentarios/:id" component={Comment} />
              <Route exact path="/añadir_comentarios" component={NewComment} />
              <Route exact path="/comentarios/edit/:id" component={EditComment} />
            </Switch>
          </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
