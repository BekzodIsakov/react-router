import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import NotFoundPage from "./components/NotFoundPage";
import Teacher from "./components/Teacher";
import Student from "./components/Student";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                  })}
                  to={"/"}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/about"}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about/*' element={<About />}>
            <Route path='teacher' element={<Teacher />} />
            <Route path='student' element={<Student />} />
          </Route>
          <Route path='/contact/*' element={<Contact />}>
            <Route path=':userId' element={<User />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
