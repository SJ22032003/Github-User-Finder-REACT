import React from "react";
import { useEffect, useContext } from "react";
import Loader from "../layout/loading";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
function UserResults() {
  const { users, loading, fetchUser } = useContext(GithubContext);

  useEffect(() => {
    fetchUser();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default UserResults;
