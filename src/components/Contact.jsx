import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUsers() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
          signal,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const usersData = await response.json();
        if (!signal.aborted) {
          setUsers(usersData);
        }
      } catch (error) { // name, message
        if (error.name == "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error.message);
          console.error("Fech error:", error);
        }
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className='page'>
      <aside>
        <ol>
          {users.map((u) => (
            <li key={u.id}>
              <Link to={`${u.id}`}>{u.name}</Link>
            </li>
          ))}
        </ol>
      </aside>

      <Outlet />
    </div>
  );
};

export default Contact;
