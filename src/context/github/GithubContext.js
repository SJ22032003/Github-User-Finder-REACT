import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const Github_URL = process.env.REACT_APP_GITHUB_URL;
const Github_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos:[],
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
        type: "GET_USERS",
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

  // Get single user
  const getUser = async (login) => {
    setLoading();
    try {
      const response = await fetch(`${Github_URL}/users/${login}`, {
        headers: {
          Authorization: `${Github_TOKEN}`,
        },
      });
      if(response.status === 404){
        window.location = '/notfound404'
      }else{
        const data = await response.json();
        console.log(data);
        dispatch({
          type:'GET_USER',
          payload: data,
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Get User repos

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user:state.user,
        repos:state.repos,
        fetchUser,
        getUser,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
