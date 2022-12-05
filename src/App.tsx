import logo from './logo.svg';
import './App.css';
import KeyCloakService from './security/KeycloakService';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Postcontent from './pages/Postcontent';

export default function App() {
  function logout() {
    KeyCloakService.CallLogout();
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome {KeyCloakService.GetUserName()}</p>
        <p>Roles: {KeyCloakService.GetUserRoles()?.join(" ")}</p>
        <button onClick={logout}>Log Out</button>
        <Router>
          <Routes>
            <Route path="/post" element={<Postcontent />} />

          </Routes>

        </Router>
      </header>
    </div>
  );
};