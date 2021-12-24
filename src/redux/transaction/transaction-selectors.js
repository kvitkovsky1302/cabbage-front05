const currentDate = state => state.transactions.selectedDate;
const getTransactions = state => state.transactions.transactions;
const getIsLoading = state => state.transactions.isLoading;
const getTotalBalance = state => state.transactions.totalBalance;

// const getExpenseBySixMonth = state => {
//   return state.transactions.sixMonthsExpense;
// };

// const getIncomeBySixMonth = state => state.transactions.sixMonthsIncome;

const transactionsSelectors = {
  currentDate,
  getTransactions,
  getIsLoading,
  getTotalBalance,
  // getExpenseBySixMonth,
  // getIncomeBySixMonth,
};

export default transactionsSelectors;
