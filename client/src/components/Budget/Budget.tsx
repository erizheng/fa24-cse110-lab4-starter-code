import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget, updateBudget } from "../../utils/budget-utils";


const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  
  useEffect(() => {
    loadBudget();
    }, []);
  
    // Function to load expenses and handle errors
    const loadBudget = async () => {
    try {
      const budgetB = await fetchBudget();
      setBudget(budgetB);
    } catch (err: any) {
      console.log(err.message);
    }
    };
  
    const eventHandler = (event: any) => {
      setBudget(event.target.value)
      updateBudget(budget);
    }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Exercise: Add add new expense to expenses context array

    updateBudget(budget);
      setBudget(budget);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div style={{display: "flex"}}>
      Budget: $
        <form onSubmit={(event) => onSubmit(event)}>
          <input value={budget} onChange={(event) => setBudget(Number(event.target.value))} />
          <button type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Budget;