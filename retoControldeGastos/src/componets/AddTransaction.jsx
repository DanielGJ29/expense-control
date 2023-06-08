import React, { useState, useContext } from "react";

//Context
import GlobalContext from "../Context/GlobalState";

const AddTransaction = () => {
  const [valueInput, setValueInput] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  //Funtions
  const onSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    let day = `${date.getDate()}`.padStart(2, "0");
    let month = `${date.getMonth() + 1}`.padStart(2, "0");
    const year = date.getFullYear();
    const currentDate = `${day}/${month}/${year}`;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name: valueInput,
      amount: +amount > 0 ? +amount : +amount * -1,
      balance: +amount > 0 ? "income" : "expense",
      date: currentDate,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="container shadow p-3 mb-5 bg-body rounded  rounded-3 w-100 h-75 p-2 mt-4">
      <p className="fs-5">Agregar movimiento</p>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Movimiento</label>
          <input
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Movimiento"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Monto</label>
          <p>(+ ingresos, - Gastos)</p>
          <input
            type="text"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Monto"
          />
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <button className="btn btn-primary px-5">Agregar Movimiento</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
