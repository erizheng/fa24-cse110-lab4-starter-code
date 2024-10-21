import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

// describe("Expense Create", () => {

// }),
describe("Expense Delete", () => {
    test('Successfully Removed', () => {
        render(<App />);

        //get buttons and fields
        const saveButton = screen.getByRole('button');
        const nameBox = screen.getByText('Expense Name');
        const costBox = screen.getByText('Expense Cost');

        //adds 3 expenses to the expenses list
        fireEvent.change(nameBox, { target: { value: "Expense 1" } });
        fireEvent.change(costBox, { target: { value: 50 } });


    }),
    test('total Spend and remainding updates', () => {
        render(<App />);

    });

});
// describe("Expense Budget Balance Verification", () => {

// });


