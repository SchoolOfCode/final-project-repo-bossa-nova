import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.SidebarNav}>
        <li className="applications">My Applications</li>
        <li className="checklist">Document Checklist</li>
        <li className="resources">Resources</li>
        <li className="next-interviews">Next Interviews</li>
      </ul>
    </div>
  );
}

export default Sidebar;
