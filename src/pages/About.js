import React from "react";
// import Card from "../shared/Card";
import { FaGithub , FaLinkedin} from "react-icons/fa";
function About() {
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
        margin:"0px",
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
    }
    
]
  return (
    <div>
        <div style={mainDivStyle[0]}>
      <div style={mainDivStyle[2]}>
        <h1 style={mainDivStyle[1]}>Github User Finder</h1>
        <div>
          <p style={mainDivStyle[3]}>
            This project is shows github users profile with detail insight Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta sequi.
            Repudiandae repellendus et, quisquam culpa ipsa praesentium saepe,
            voluptas aperiam ut deleniti temporibus atque corrupti quos,
            cupiditate perspiciatis ducimus.
            <br />
            <strong>by Shobhit Jaryal</strong>
          </p>
        </div>
        <div style={mainDivStyle[4]}>
          <a href="https://github.com/SJ22032003" title="My Github">
            <FaGithub
              style={{ margin: "20px", fontSize: "30px", cursor: "pointer" }}
            />
          </a>
          <a href="https://github.com/SJ22032003" title="My Linkden">
            <FaLinkedin
              style={{ margin: "20px", fontSize: "30px", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
