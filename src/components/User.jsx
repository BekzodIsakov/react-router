import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchUserData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/users/${userId}`,
          { signal }
        );
        if (!response.ok) {
          throw new Error("Network reponse is not ok");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        if (error.name == "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error.message);
        }
      }
    }

    fetchUserData();

    return () => {
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
          User: {userId}
          <h3>{user.name}</h3>
          <img src='' alt='' />
        </div>
      )}
    </div>
  );
};

export default User;
