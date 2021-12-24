const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getBalance = state => state.auth.balance;
const getToken = state => state.auth.token;


const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getBalance,
  getToken,
};

export default authSelectors;
