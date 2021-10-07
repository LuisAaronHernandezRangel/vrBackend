const User = require('../models/user.model')

module.exports = {
  async create(req, res) {
    const { body } = req

    User
      .create(body)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  },
  async list(req, res) {
    User
      .find()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        res.status(400).json({ message: 'Algo salió mal' })
      })
  },

  async showAll(req, res) {
   
    const { puesto } = req.query;
    try {
      let users = "";
      if (puesto) {
        users = await User.find({   
          puesto,
        });
      } else {
        users = await User.find();
      }
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

}