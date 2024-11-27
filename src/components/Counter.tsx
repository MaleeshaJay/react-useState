import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="row">
        <div className="col-5"></div>
        <div className="col-2 mt-2 text-center">
          <h4>Task 01</h4>
          <div className="card text-center border-secondary text-body-secondary">
            <p>
              <h3>Count: {count}</h3>
            </p>
            <button
              className="btn btn-outline-info"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increment
            </button>
            <button
              className="btn btn-outline-warning mt-2"
              onClick={() => {
                {
                  count > 0 ? setCount(count - 1) : setCount(0);
                }
              }}
            >
              Decrement
            </button>

            <button
              className="btn btn-outline-danger mt-2"
              onClick={() => {
                setCount(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </>
  );
}
export default Counter;
