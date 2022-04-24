const Expense = require("../models/expenseModal");

//Create Expense

exports.createExpense = async (req, res, next) => {
  const expense = await Expense.create(req.body);
  res.status(201).json({ success: true, expense });
};

//get all expense
exports.getAllExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.status(201).json( expenses );
};
