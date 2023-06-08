import React from "react";
//import GlobalContext from "../Context/GlobalState";

const Balance = ({ total, income, expense }) => {
  //const { state } = useContext(GlobalContext);

  //Money formatter function
  function moneyFormatter(num) {
    if (num) {
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
    } else {
      return "$ 00.00";
    }
  }

  return (
    <div className="container shadow p-3 mb-5 bg-body rounded  rounded-3 w-100 h-75 p-2 mt-4">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center ">
          <div className="lh-1">
            <p className="fw-bold fs-5 fw-bold">Balance del mes</p>
            <p className="text-center text-primary fs-2 fw-bold">
              {total < 0 ? `- ${moneyFormatter(total)}` : moneyFormatter(total)}
            </p>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-around align-items-center lh-1">
          <div className="text-success  pt-2 fw-bold">
            <p className="text-center">Ingresos</p>{" "}
            <p className="fs-2"> {moneyFormatter(income)}</p>
          </div>
          <div className="d-flex  align-items-center border border-1  h-75 "></div>
          <div className="text-red pt-2 fw-bold">
            <p className="text-center">Gastos</p>{" "}
            <p className="fs-2">{moneyFormatter(expense)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
