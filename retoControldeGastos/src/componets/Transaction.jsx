import React from "react";

const Transaction = ({ name, amount, balance }) => {
  //Money formatter function
  function moneyFormatter(num) {
    let p = num.toFixed(2).split(".");
    return (
      "$ " +
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  }

  return (
    <div className="container shadow p-1 mb-2 bg-body rounded  rounded-3 w-100">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between align-items-center ">
          <div className="d-flex ">
            <div
              className={`w-25 h-100 rounded-circle ${
                balance === "expense" ? "bg-success" : "bg-red"
              } p-3`}
            ></div>
            <div className="">
              <p className="m-0 px-2 text-capitalize ">{name}</p>
            </div>
          </div>
          <p
            className={`text-center ${
              balance === "expense" ? "text-red" : "text-success"
            } fs-3 fw-bold p-0 m-0`}
          >
            {balance === "expense" ? "-" : "+"} {moneyFormatter(+amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
