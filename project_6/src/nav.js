import React from "react";

function Nav() {
  return (
    <div className="row align-items-end">
      <div className="col-3">
        <img src="../images/white.png" alt="" className="img-fluid" />
      </div>
      <div className="col-9">
        <div className="row d-flex">
          <nav className="navbar navbar-expand justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="https://reactjs.org/docs/create-a-new-react-app.html"
                  className="nav-link"
                >
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://reactjs.org/docs/create-a-new-react-app.html"
                  className="nav-link"
                >
                  Terms & condeitions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
