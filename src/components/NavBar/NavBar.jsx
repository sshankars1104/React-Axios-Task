import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <h1>React Axios Task</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
