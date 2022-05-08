import React from "react";
import { FaLink , FaEye ,FaUtensils, FaStar } from "react-icons/fa";
function ReposItem({ repo }) {
  return (
    <div className="repo-item-box">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h1 className="repo-item-name">
          <FaLink className="inline mr-2" />
          {repo.name}
        </h1>
      </a>
      <div className="repo-item-desc">
          <div className="repo-info">
              <div className="badge badge-info mr-2"><FaEye className="inline mr-1"/>{repo.watchers_count}</div>
              <div className="badge badge-success mr-2"><FaUtensils className="inline mr-1"/>{repo.watchers_count}</div>
              <div className="badge badge-warning mr-2"><FaStar className="inline mr-1"/>{repo.stargazers_count}</div>
          </div>
          <div className="inner-desc">
          {repo.description}
          </div>
      </div>
    </div>
  );
}

export default ReposItem;
