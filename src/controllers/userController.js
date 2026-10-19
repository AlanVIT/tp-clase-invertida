const { users } = require("../data/db");

function getProfile(req, res) {
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const { password, ...userWithoutPassword } = user;
  return res.json({ user: userWithoutPassword });
}

function updateMe(req, res) {
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const { name } = req.body;
  user.name = name || user.name;

  const { password, ...userWithoutPassword } = user;
  return res.status(200).json({ message: "Perfil actualizado", user: userWithoutPassword });
}

module.exports = {
  getProfile,
  updateMe
};
