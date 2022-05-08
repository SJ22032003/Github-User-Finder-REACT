/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FaTwitter, FaGlobe, FaGithub } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Loading from "../components/layout/loading";
import UserStat from "../components/layout/UserStat";
import UserSocial from "../components/layout/UserSocial";
import ReposList from "../components/repos/ReposList";

function User() {
  const params = useParams();
  const { getUser, user, loading , getUserRepos , repos } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  const hireableCheck = {
    valid: {
      backgroundColor: "green",
    },
    invalid: {
      backgroundColor: "grey",
      cursor: "not-allowed",
    },
    twitterCheck: {
      valid: {
        display: "block",
      },
      invalid: {
        display: "none",
      },
    },
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Link to="/home">
          <div className="btn lg:btn-s md:btn-s m-1">Search</div>
        </Link>
        <div className="all-container">
          <main className="main-div">
            <div className="main-container">
              {/* Profile Image & info */}
              {/* image div */}
              <section className="image-container">
                <div className="image">
                  <img src={avatar_url} alt={name} />
                  <div className="image-name">@{login}</div>
                </div>
              </section>
              {/* Bio div */}
              <section className="bio-container">
                {/* Name and Hireable */}
                <div className="name-hire">
                  <div className="name">{name}</div>
                  <div className="hire-type">
                    <div
                      className="hire text-white btn btn-xs m-1"
                      style={
                        hireable === true
                          ? hireableCheck.valid
                          : hireableCheck.invalid
                      }
                    >
                      Hireable
                    </div>
                    <div className="btn btn-primary m-1 btn-xs">{type}</div>
                  </div>
                </div>
                {/* Bio */}
                <div className="user-bio">{bio}</div>
                {/* Visit Github */}
                <div>
                  <div className="btn btn-ghost outline lg:btn md:btn-s m-3">
                    <a href={html_url} target="_blank" rel="noreferrer">
                      user github
                    </a>
                  </div>
                </div>
                {/* stats */}
                <UserStat
                  followers={followers}
                  following={following}
                  repos={public_repos}
                />
                <UserSocial
                  location={location}
                  blog={blog}
                  twitter={twitter_username}
                />
                <div className="social-accounts">
                  <div
                    className="social-media"
                    style={
                      html_url
                        ? hireableCheck.twitterCheck.valid
                        : hireableCheck.twitterCheck.invalid
                    }
                  >
                    <a
                      href={html_url}
                      alt={html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {<FaGithub style={{ fontSize: "30px" }} />}
                    </a>
                  </div>
                  <div
                    className="social-media"
                    style={
                      twitter_username
                        ? hireableCheck.twitterCheck.valid
                        : hireableCheck.twitterCheck.invalid
                    }
                  >
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      alt={twitter_username}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {<FaTwitter style={{ fontSize: "30px" }} />}
                    </a>
                  </div>
                  <div
                    className="social-media"
                    style={
                      blog
                        ? hireableCheck.twitterCheck.valid
                        : hireableCheck.twitterCheck.invalid
                    }
                  >
                    <a href={blog} target="_blank" rel="noreferrer">
                      {<FaGlobe style={{ fontSize: "30px" }} />}
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </main>
          {/* Repos List */}
          <main>
            <div>
              <ReposList repos={repos}/>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default User;
