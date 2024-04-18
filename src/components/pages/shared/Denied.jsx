import React from "react";
import "../../../styles/denied.css";

function Denied () {
  return (
    <div className="noAccess">
      <h1 className="title">Access Denied</h1>
      <p>You do not have permission to view this page</p>
      <img className="imgDenied" src="../../../../public/images/family.jpg" alt="" />

    </div>
  );
}

export default Denied;