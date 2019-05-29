import React from 'react';
import './App.css';
import Info from './pages/info/index'
import Login from './pages/login/index'
import Index from './pages/index/index'
import {
  // BrowserRouter,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/info" component={Info}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
