import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

// describe("Expense Create", () => {

// }),
describe("Expense Delete", () => {
    test('Successfully Removed', () => {
        render(<App />);

        //get buttons and fields
        const saveButton = screen.getByRole('button');
        const nameBox = screen.getByTestId('ExpenseN');
        const costBox = screen.getByTestId('ExpenseC');

        //adds 3 expenses to the expenses list
        fireEvent.change(nameBox, { target: { value: "Expense 1" } });
        fireEvent.change(costBox, { target: { value: 50 } });
        fireEvent.click(saveButton);
        fireEvent.change(nameBox, { target: { value: "Expense 2" } });
        fireEvent.change(costBox, { target: { value: 500 } });
        fireEvent.click(saveButton);
        fireEvent.change(nameBox, { target: { value: "Expense 3" } });
        fireEvent.change(costBox, { target: { value: 33 } });
        fireEvent.click(saveButton);
        const xButton2 = screen.getByTestId('Expense 2');

        //The three expense should be on screen
        const exp1 = screen.getByText('Expense 1');
        const exp2 = screen.getByText('Expense 2');
        const exp3 = screen.getByText('Expense 3');

        expect(exp1).toBeInTheDocument,
        expect(exp2).toBeInTheDocument,
        expect(exp3).toBeInTheDocument,

        //delete exp2
        fireEvent.click(xButton2),

        //exp2 should not be on screen
        expect(exp2).not.toBeInTheDocument;

    });
    test('total Spend and remainding updates', () => {
        render(<App />);

        //get buttons and fields
        const saveButton = screen.getByRole('button');
        const nameBox = screen.getByTestId('ExpenseN');
        const costBox = screen.getByTestId('ExpenseC');

        //adds 3 expenses to the expenses list
        fireEvent.change(nameBox, { target: { value: "Expense 1" } });
        fireEvent.change(costBox, { target: { value: 50 } });
        fireEvent.click(saveButton);
        fireEvent.change(nameBox, { target: { value: "Expense 2" } });
        fireEvent.change(costBox, { target: { value: 500 } });
        fireEvent.click(saveButton);
        fireEvent.change(nameBox, { target: { value: "Expense 3" } });
        fireEvent.change(costBox, { target: { value: 33 } });
        fireEvent.click(saveButton);
        const xButton2 = screen.getByTestId('Expense 2');

        //The three expense should be on screen
        const exp1 = screen.getByText('Expense 1');
        const exp2 = screen.getByText('Expense 2');
        const exp3 = screen.getByText('Expense 3');

        const spent = screen.getByTestId('Spending');
        const remain = screen.getByTestId('Remainder');

        expect(exp1).toBeInTheDocument,
        expect(exp2).toBeInTheDocument,
        expect(exp3).toBeInTheDocument,

        //the screen should have 583 on it as the total spent so far
        expect(spent.innerHTML).toContain("Spent so far: $583"),

        //remaining should be 1000-583
        expect(remain.innerHTML).toContain("Remaining: $417"),

        //delete exp2
        fireEvent.click(xButton2),

        //new spent should be 83, and remaining should be 917
        expect(spent.innerHTML).toContain("Spent so far: $83"),
        expect(remain.innerHTML).toContain("Remaining: $917");
    });

});
// describe("Expense Budget Balance Verification", () => {

// });


