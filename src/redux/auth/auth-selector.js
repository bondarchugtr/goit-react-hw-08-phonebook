const getIsLoggedIn = (state) => state.auth.isloggedIn;

const getUserName = (state) => state.auth.user.name;

const authenSelector = {
  getIsLoggedIn,
  getUserName,
};

export default authenSelector;
