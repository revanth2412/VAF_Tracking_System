export const auth = (req, res, next) => {
    if (req.session.email) {
      console.log(req.session.email)
      next();
    } else {
      res.redirect('/login');
    }
  };
  