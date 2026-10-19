const { users } = require("../data/db");

function listUsers(req, res) {
  const usersWithoutPassword = users.map(({ password, ...user }) => user);

  return res.status(200).json({
    total: usersWithoutPassword.length,
    users: usersWithoutPassword
  });
}

module.exports = {
  listUsers
};
