import { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Cameras from './components/Cameras/Cameras'
import './http-common';
import './App.css';

import { Switch, Route } from 'react-router-dom';


function App() {

    const [userName, setUserName] = useState("");
    const [inputValue, setInputValue] = useState("")
    
    const _handleSubmit = (e) => {
      e.preventDefault();
      setUserName(inputValue)
      setInputValue("");
    }

  console.log(userName)
  return (
    <div className="App">
      <Switch>
          <Route path="/cameras">
              <Cameras 
                useName={userName}
              />
          </Route>
        <Route path="/">
          <LoginPage 
            value={inputValue}
            onSubmit={_handleSubmit}
            onChange={e => setInputValue(e.target.value)}            
          />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
