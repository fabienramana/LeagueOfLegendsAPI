module.exports = (user) => {
  const userToReturn = {
    ...user,
  };
  delete userToReturn.password;
  return userToReturn;
};
