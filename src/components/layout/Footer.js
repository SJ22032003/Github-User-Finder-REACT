import React from "react";

function Footer() {
    const revStyle = {
        color: "white",
    }
    const d = new Date();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {d.getFullYear()} - All right reserved to <a href="/" style={revStyle}>Shobhit Jaryal</a></p>
      </div>
    </footer>
  );
}

export default Footer;
