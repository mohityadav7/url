const router = require('express').Router();
const passport = require('passport');

// auth Login
router.get('/login', (req, res) => {
  res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}), (req, res) => {
  // handle with passport
  res.send('logging in with google');
});

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback uri');
});

module.exports = router;