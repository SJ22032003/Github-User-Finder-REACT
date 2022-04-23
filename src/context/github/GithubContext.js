import { createContext, useState } from "react";

const GithubContext = createContext();

const Github_URL = process.env.REACT_APP_GITHUB_URL;
const Github_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${Github_URL}/users`, {
        headers: {
          Authorization: `token ${Github_TOKEN}`,
        },
      });
      const data = await response.json();
    //   console.log(data);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return <GithubContext.Provider value={{
      users,
      loading,
      fetchUser
  }}>
      {children}
  </GithubContext.Provider>
};

export default GithubContext
