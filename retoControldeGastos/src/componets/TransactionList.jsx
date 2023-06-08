import React from "react";

//Component
import Transaction from "./Transaction";

const TransactionList = ({ monthTransaction }) => {
  const date = new Date();
  let day = `${date.getDate()}`.padStart(2, "0");
  let month = `${date.getMonth() + 1}`.padStart(2, "0");

  return (
    <div className="w-100 mx-auto ">
      <div className="">
        <p className="fw-bold mb-0">
          Hoy-{day} {month}.
        </p>
      </div>

      {monthTransaction?.map((transaction) => (
        <Transaction
          key={transaction?.id}
          name={transaction?.name}
          amount={transaction?.amount}
          balance={transaction?.balance}
        />
      ))}
    </div>
  );
};

export default TransactionList;
