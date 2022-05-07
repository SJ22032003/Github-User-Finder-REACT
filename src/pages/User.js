/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FaTwitter ,FaBlog ,FaGithub } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Loading from "../components/layout/loading";
import UserStat from "../components/layout/UserStat";

function User() {
  const params = useParams();
  const { getUser, user, loading } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
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
    valid :{
      backgroundColor:"green"
    },
    invalid:{
      backgroundColor:"grey",
      cursor:"not-allowed"
    },
    twitterCheck:{
      valid:{
        display:"block"
      },
      invalid:{
        display:"none"
      }
    }
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <main className="main-div">
          <div className="main-container">
            {/* Profile Image & info */}
            {/* image div */}
            <section className="image-container">
              <div className="image">
                <img src={avatar_url} alt={name} />
              </div>
            </section>
            {/* Bio div */}
            <section className="bio-container">
              {/* Name and Hireable */}
              <div className="name-hire">
                <div className="name">{name}</div>
                <div className="hire text-white btn btn-xs m-2" style={ hireable === true ? hireableCheck.valid : hireableCheck.invalid}>
                  Hireable
                </div>
                <div className="btn btn-primary m-2 btn-xs">
                  {type}
                </div>
              </div>
              {/* Bio */}
              <div className="user-bio">{bio}</div>
              {/* stats */}
              <UserStat followers={followers} following={following} repos={public_repos}/>
              <div className="social-accounts">
              <div className="social-media" style={html_url ? hireableCheck.twitterCheck.valid : hireableCheck.twitterCheck.invalid }><a href={html_url}alt={html_url} target="_blank" rel="noreferrer">{<FaGithub style={{fontSize:"30px"}}/>}</a></div>
              <div className="social-media" style={twitter_username ? hireableCheck.twitterCheck.valid : hireableCheck.twitterCheck.invalid }><a href={`https://twitter.com/${twitter_username}`} alt={twitter_username} target="_blank" rel="noreferrer">{<FaTwitter style={{fontSize:"30px"}}/>}</a></div>
              <div className="social-media" style={blog ? hireableCheck.twitterCheck.valid : hireableCheck.twitterCheck.invalid }><a href={`https://${blog}`} target="_blank" rel="noreferrer">{<FaBlog style={{fontSize:"30px"}}/>}</a></div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default User;
