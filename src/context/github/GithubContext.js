import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const Github_URL = process.env.REACT_APP_GITHUB_URL;
const Github_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  // Get intial users
  const fetchUser = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    setLoading();
    try {
      const response = await fetch(`${Github_URL}/search/users?${params}`, {
        headers: {
          Authorization: `${Github_TOKEN}`,
        },
      });
      const { items } = await response.json();
      console.log(items);
      dispatch({
        type: "GET_USER",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const clearUsers = () => {
    dispatch({
      type:"CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUser,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
