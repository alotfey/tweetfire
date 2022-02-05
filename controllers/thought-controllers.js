const { Thought } = require("../models");

const thoughtController = {
  // get all users
  getAllThought(req, res) {
    Thought.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  getThoughtById({params}, res) {
    Thought.findOne({_id: params.thoughtId})
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  }
};

module.exports = thoughtController;
