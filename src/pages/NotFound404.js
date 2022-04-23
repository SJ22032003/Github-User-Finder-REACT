import React from 'react'
// import { FaGithub  , FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
function NotFound404() {
    const mainDivStyle = [{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "fit-content",
    },
    {
        fontSize: "2.5rem",
        fontWeight: "bold",
        borderLeft: "5px solid #a6adba",
        paddingLeft: "10px",
        margin:"20px"
    },
    {
        margin:"30px",
        maxWidth: "90%",
        backgroundColor: "#191d24",
        padding: "1rem",
        borderRadius: "5px",
    },
    {
        fontSize: "1.1rem",
        textAlign: "left",
        margin: "20px",
        lineHeight: "30px",
    },
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "20px"
    }
    
]
  return (
    <div>
        <div style={mainDivStyle[0]}>
      <div style={mainDivStyle[2]}>
        <h1 style={mainDivStyle[1]}>Error 404</h1>
        <div>
          <p style={mainDivStyle[3]}>
            Whatever you are searching is not available at current movement.
          </p>
        </div>
        <div style={mainDivStyle[4]}>
          <Link to="/home" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NotFound404