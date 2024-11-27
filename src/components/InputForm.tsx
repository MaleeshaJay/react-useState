import { useState } from "react";

function InputForm() {
  const [textInput, setTextInput] = useState("");

  return (
    <>
      <div className="row">
        <div className="col-5"></div>
        <div className="col-2 text-center mt-2">
          <h4>Task 02</h4>
          <div className="card text-center border-secondary text-body-secondary mt-2 mb-2">
            <input
              type="text"
              className="form-control"
              id="inputText"
              onChange={(e) => {
                setTextInput(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => {
                alert(textInput);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </>
  );
}
export default InputForm;
