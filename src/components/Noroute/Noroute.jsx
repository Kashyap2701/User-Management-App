import React from "react";
import { Link } from "react-router-dom";

function Noroute() {
  return (
    <div>
      <p>Page not Found</p>
      <button>
        <Link to="/home">Goto Home</Link>
      </button>
    </div>
  );
}

export default Noroute;
