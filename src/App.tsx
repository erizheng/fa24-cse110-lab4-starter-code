import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppContext, AppProvider } from "./context/AppContext";
import React, { useState, useContext } from "react";
import { Expense } from "./types/types";

const App = () => {
  // HINT: Wrap the MyBudgetTracker component with AppContextProvider
    return <AppProvider><MyBudgetTracker /></AppProvider>;

  
};

export default App;
