import { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Cameras from './components/Cameras/Cameras';
import Settings from './components/Settings/Settings';
import Reporting from './components/Reporting/Reporting';
import './http-common';
import './App.css';
import { useHistory } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';
import english from './translations/en.json'
import french from './translations/fr.json'

function App() {

    const [userName, setUserName] = useState("");
    const [inputValue, setInputValue] = useState("")
    const [language, setLanguage] = useState(english)


    let history = useHistory()
    const _handleSubmit = (e) => {
      e.preventDefault();
      setUserName(inputValue)
      setInputValue("");
      const loggedInPath = "/cameras"
      history.push(loggedInPath)
    }

    const _handleLanguageChange = () => {
      setLanguage(french);
    }

  return (
    <div className="App">
      <Switch>
          <Route path="/cameras">
              <Cameras 
                userName={userName}
                language={language}
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
              language={language}
              value={inputValue}
              onSubmit={_handleSubmit}
              onChange={e => setInputValue(e.target.value)}            
              userName={userName}
              langChange={_handleLanguageChange}
            />
          </Route>

      </Switch>

    </div>
  );
}

export default App;
