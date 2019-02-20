import React from "react";

const Process = props => {
  return (
    <div>
      <div
        style={{
          display: !props.isSuccess ? "" : "none"
        }}
      >
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="row justify-content-center text-primary m-3">
          <h3>Submitting Data</h3>
        </div>
      </div>

      <div
        style={{
          display: props.isSuccess ? "" : "none"
        }}
      >
        <div className="row justify-content-center text-success m-3">
          <h3>Data submitted successfully !</h3>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-info col-2" onClick={props.onClick}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
