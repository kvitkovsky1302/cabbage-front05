const currentDate = state => state.transactions.selectedDate;
const getTransactions = state => state.transactions.transactions;
const getIsLoading = state => state.transactions.isLoading;
const getTotalBalance = state => state.transactions.totalBalance;

const transactionsSelectors = {
  currentDate,
  getTransactions,
  getIsLoading,
  getTotalBalance,
};

export default transactionsSelectors;
