import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../Context/GlobalState";

//Component
import Balance from "../../componets/Balance";
import TransactionList from "../../componets/TransactionList";
import AddTransaction from "../../componets/AddTransaction";

const Month = () => {
  const { id } = useParams();
  const {
    state: { transactions },
    allTransactions,
  } = useContext(GlobalContext);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [transactionByMonth, settransactionByMonth] = useState([]);

  useEffect(() => {
    allTransactions();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    const dateSingle = (date) => {
      const year = date.split("/");
      return year;
    };

    //Mes
    const transactionByMonth = transactions.filter(
      (transaction) => dateSingle(transaction.date)[1] === id
    );
    settransactionByMonth(transactionByMonth);

    //Ingresos
    const income = transactionByMonth.filter(
      (transaction) => transaction.balance === "income"
    );
    const totalIncome = income.reduce((acc, item) => (acc += +item.amount), 0);
    setIncome({ income, totalIncome });

    //Gastos
    const expense = transactionByMonth.filter(
      (transaction) => transaction.balance === "expense"
    );
    const totalExpense = expense.reduce(
      (acc, item) => (acc += +item.amount),
      0
    );
    setExpense({ expense, totalExpense });

    const total = totalIncome - totalExpense;
    setTotal(total);
  }, [transactions, id]);

  return (
    <div>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <Balance
            total={total}
            income={income?.totalIncome}
            expense={expense?.totalExpense}
          />
          <TransactionList monthTransaction={transactionByMonth} />

          <AddTransaction />
        </div>
      </div>
    </div>
  );
};

export default Month;
