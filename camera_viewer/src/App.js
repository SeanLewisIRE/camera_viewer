import { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Cameras from './components/Cameras/Cameras';
import Settings from './components/Settings/Settings';
import Reporting from './components/Reporting/Reporting';
import './http-common';
import './App.css';
import { useHistory } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';


function App() {

    const [userName, setUserName] = useState("");
    const [inputValue, setInputValue] = useState("")
  
    let history = useHistory()
    const _handleSubmit = (e) => {
      e.preventDefault();
      setUserName(inputValue)
      setInputValue("");
      const loggedInPath = "/cameras"
      history.push(loggedInPath)
    }

  return (
    <div className="App">
      <Switch>
          <Route path="/cameras">
              <Cameras 
                userName={userName}
              />
          </Route>

          <Route path="/reporting">
            <Reporting/>
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>

          <Route path="/">
            <LoginPage 
              value={inputValue}
              onSubmit={_handleSubmit}
              onChange={e => setInputValue(e.target.value)}            
              userName={userName}
            />
          </Route>

      </Switch>

    </div>
  );
}

export default App;
