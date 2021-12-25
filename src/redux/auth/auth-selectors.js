const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getBalance = state => state.auth.balance;
const getToken = state => state.auth.token;
const getUserAvatar = state => state.auth.getUserAvatar;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getBalance,
  getToken,
  getUserAvatar,
};

export default authSelectors;
