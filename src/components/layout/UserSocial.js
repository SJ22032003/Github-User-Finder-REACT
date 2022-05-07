import React from "react";

function UserSocial({ location, blog, twitter }) {
  return (
    <div className="records">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">Location</div>
          <div className="text-white">{!location ? "N/A" : location}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Website</div>
          <div className="text-white">{!blog ? "N/A": blog}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Twitter</div>
          <div className="text-white">{!twitter ? "N/A" : twitter}</div>
        </div>
      </div>
    </div>
  );
}

export default UserSocial;
