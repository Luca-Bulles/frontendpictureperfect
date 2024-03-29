import logo from './logo.svg';
import './App.css';
import KeyCloakService from './security/KeycloakService';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Postcontent from './pages/Postcontent';
import Deletecontent from './pages/Deletecontent';
import Updatecontent from './pages/Updatecontent';
import Getcontent from './pages/Getcontent';

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
        <ul>Available endpoints:</ul>
        <li>/post</li>
        <li>/update</li>
        <li>/delete</li>
        <li>/get</li>
        <Router>
          <Routes>
            <Route path="/post" element={<Postcontent />} />
          </Routes>

        </Router>

        <Router>
          <Routes>
            <Route path="/delete" element={<Deletecontent />} />
          </Routes>

        </Router>

        <Router>
          <Routes>
            <Route path="/update" element={<Updatecontent />} />
          </Routes>

        </Router>

        <Router>
          <Routes>
            <Route path="/get" element={<Getcontent />} />
          </Routes>

        </Router>
      </header>
    </div>
  );
};