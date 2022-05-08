import React from "react";
import ReposItem from "./ReposItem";

function ReposList({ repos }) {
  return (
    <div className="stack repos-list mt-5">
      <div className="text-white shadow-md card bg-base-200 ">
        <h1 className="repo-head">Latest Repositories</h1>
        <div className="card-body">{repos.map((item) => (
            <ReposItem key={item.id} repo={item}/>
        ))}</div>
      </div>
    </div>
  );
}

export default ReposList;
