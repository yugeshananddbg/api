const express = require("express");
const {
  getAllExpenses,
  createExpense,
} = require("../controller/expenseController");
const router = express.Router();

router.route("/expenses").get(getAllExpenses);
router.route("/create/expense").post(createExpense);

module.exports = router;
