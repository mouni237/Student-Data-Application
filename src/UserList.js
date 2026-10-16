import { useEffect, useState } from "react";
import { getUsers } from "./api";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div style={{ textAlign: "center"}}>
      {users.slice(0, 2).map((user) => (
        
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;