const router = require('express').Router();
let User = require('../models/users.model.');

//retrieving all users in our mongo db
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//retrieving a specific user from our mongo db
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//adding a user to our mongo db
router.post('/add', (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//put or patch (update a specific user in db)
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        username: req.body.username
    })
      .then(users => res.json(`User updated!`))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//delete a specific user in db
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(users => res.json(`User deleted!`))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
