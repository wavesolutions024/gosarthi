import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="parent four_not_found_parent">
        <div className="cont four_not_found_cont">
          <div className="left_notfound">
            <h1>Something's missing.</h1>
            <p>
              Looks like this page is missing. Don't worry though, our best team
              is on the case.
            </p>
            <Link to="/" className="btn" style={{ width: "fit-content" }}>
              Go Back
            </Link>
          </div>
          <div className="right_notfound">
            <span>404</span>
            <h3>Not Found</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
