const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema([
  {
    title: {
      type: String,
      required: [true, "Please Enter expense Title"],
    },
    ammount: {
      type: Number,
      required: [true, "Please Enter expense ammount"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    id: {
      type: Number,
    },
  },
]);
module.exports = mongoose.model("Expense", expenseSchema);
