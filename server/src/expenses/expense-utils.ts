import { Expense } from "../types";
import { Request, Response } from "express";
import { Database } from "sqlite";


export async function createExpenseServer(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
        res.status(201).send({ id, description, cost });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };
 
 }

 export async function deleteExpense(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!id) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('DELETE FROM expenses WHERE id= ?;', id);
        res.status(201).send({ id });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be deleted, + ${error}` });
    };
 
 }

 export async function getExpenses(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.all('SELECT * FROM expenses');//not sure if this is right
        res.status(201).send({ id });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be retrieved, + ${error}` });
    };
 
 }

// export function createExpenseServer(req: Request, res: Response, expenses: Expense[]) {
//     const { id, cost, description } = req.body;

//     if (!description || !id || !cost) {
//         return res.status(400).send({ error: "Missing required fields" });
//     }

//     const newExpense: Expense = {
//         id: id,
//         description,
//         cost,
//     };

//     expenses.push(newExpense);
//     res.status(201).send(newExpense);
// }

// export function deleteExpense(req: Request, res: Response, expenses: Expense[]) {
//     // TO DO: Implement deleteExpense function
//     const { id, cost, description } = req.body;

//     const curExpense: Expense = {
//         id: id,
//         description,
//         cost,
//     };

//     const index = expenses.findIndex((expense) => expense.id == id);

//     expenses.splice(index);
//     res.status(200).send(expenses);
// }

// export function getExpenses(req: Request, res: Response, expenses: Expense[]) {
//     res.status(200).send({ "data": expenses });
// }