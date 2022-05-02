import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
function UserSearch() {
  const { users, fetchUser, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert("Enter Something" , "error");
    } else {
      //   search user
      fetchUser(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative m-2">
              <input
                type="text"
                className="size-change input pr-40 bg-gray-200 input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleTextChange}
              />
              <button
                type="submit"
                className="absolute top-0 rigth-0 rounded-l-none w-30 btn btn-lg"
              >
                Go!
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={clearUsers}
            className="btn btn-ghost btn-outline btn-lg m-2"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
