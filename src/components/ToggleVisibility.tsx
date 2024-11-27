import { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="row">
        <div className="col-5"></div>
        <div className="col-2 text-center mt-2">
          <h4>Task 03</h4>
          <div className="card border-light mt-1">
            {isVisible && <p>Hello, I am Visible!!!</p>}
            <button
              className="btn btn-outline-info"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              Show/Hide
            </button>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </>
  );
}
export default ToggleVisibility;
