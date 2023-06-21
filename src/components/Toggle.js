import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Toggle() {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    // true
    // true = !staus = false
    setStatus(!status);
    // disable the div
  };

  return (
    <>
      <button
        onClick={toggle}
        className={!status ? "btn btn-info" : "btn-danger"}
      >
        Status: {status.toString()}
      </button>
      <div>{/* Content */}</div>
    </>
  );
}
