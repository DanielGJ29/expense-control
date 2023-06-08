import { createContext, useReducer } from "react";

//Create Context
const GlobalContext = createContext();

//Reducer
const initialState = {
  transactions: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ALL_TRANSACTION":
      return {
        ...state,
        transactions: action.payload,
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

//Provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions
  const allTransactions = async () => {
    const response = await fetch(
      "http://localhost:4000/transaction?_date&_order=des"
    );
    const result = await response.json();

    dispatch({
      type: "ALL_TRANSACTION",
      payload: result,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = async (transaction) => {
    try {
      var requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      };
      const response = await fetch(
        "http://localhost:4000/transaction",
        requestOptions
      );
      const result = await response.json();

      dispatch({
        type: "ADD_TRANSACTION",
        payload: result,
      });

      allTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    state,
    dispatch,
    allTransactions,
    deleteTransaction,
    addTransaction,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
