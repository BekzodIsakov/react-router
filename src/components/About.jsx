import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className='page'>
      <nav>
        <ol>
          <li>
            <Link to={"teacher"}>teacher</Link>
          </li>
          <li>
            <Link to={"student"}>student</Link>
          </li>
        </ol>
      </nav>

      <h2>About page</h2>
      <Outlet />
    </div>
  );
};

export default About;
