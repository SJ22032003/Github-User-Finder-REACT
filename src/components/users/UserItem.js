import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl brigthen" style={{boxShadow:"5px 5px 0px 0px rgba(0,0,0,0.2)"}}>
      <figure>
        <img
          className="rounded-full w-14 h-14 m-5"
          src={avatar_url}
          alt={login}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-white">{login}</h2>
        <div className="card-actions justify-start">
          <Link to={`/users/${login}`} className="link">
            <span className="text-left text-xs">Know More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
