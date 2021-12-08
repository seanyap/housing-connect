const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');

// /api/auth/signup
router.post('/signup', (req, res) => {
  console.log('POST body: ', req.body);

  User.create({
    // type: 'Homeowner',
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    kindOfUser: req.body.kindOfUser,
  })
    .then((user) => {
      // user.password = undefined;
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

// router.METHOD(URL, route handler function - can take multiple RHFunc with express)
router.post('/login', passport.authenticate('local'), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.json(req.user);
});

//if currently logged in or not
router.get('/login', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ msg: 'Logout successful' });
});

module.exports = router;
