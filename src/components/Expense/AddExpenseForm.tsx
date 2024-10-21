import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ExpenseList from "./ExpenseList"
import { Expense } from "../../types/types";


const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const exp = useContext(AppContext);

  // Exercise: Create name and cost to state variables
  const [name, setN] = useState("" as string);
  const [cost, setC] = useState(0);

  const ExpenseHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setN(name);
    setC(cost);
  };


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Exercise: Add add new expense to expenses context array
      //exp.setExpenses(({...exp.expenses, id:{name}, name:{name} , cost:{cost}}));

      
  };

  

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            // HINT: onChange={}
            onChange={(event) => 
                setN(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            // HINT: onChange={}
            onChange={(event) => 
              setC(Number(event.target.value))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
