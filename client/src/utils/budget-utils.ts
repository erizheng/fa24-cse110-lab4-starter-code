export const fetchBudget = async (): Promise<number> => {
	const response = await fetch(`${API_BASE_URL}/expenses`);
  budget = 0;
	if (!response.ok) {
    	throw new Error('Failed to fetch expenses');
	}

	// Parsing the response to get the data
	let expenseList = response.json().then((jsonResponse) => {
    	console.log("data in fetchExpenses", jsonResponse);
    	jsonResponse.data.foreach(function (value) {
                                budget += value.cost;})
	});

	console.log("response in fetchExpenses", budget);
	return budget;
