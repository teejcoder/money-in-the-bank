const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const axios = require("axios");


// CREATE AUTH TOKEN
exports.authToken = (req,res) => {
  let globalAccessToken = '';

  const options = {
    method: 'POST',
    url: 'https://au-api.basiq.io/token',
    headers: {
      accept: 'application/json',
      'basiq-version': '3.0',
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: process.env.API_KEY
    }
  };
  axios
    .request(options)
    .then(function (response) {
      globalAccessToken = response.data.access_token;
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

}


// CREATE BASIQ USER
exports.createBasiqUser = (req,res) => {
  const options = {
    method: 'POST',
    url: 'https://au-api.basiq.io/users',
    headers: {accept: 'application/json', 
      'basiq-version': '3.0', 
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyaWQiOiI2NmE4MjIyYS02N2YyLTRkYTYtODhlNy1mOGEwN2ExOWFmOTAiLCJhcHBsaWNhdGlvbmlkIjoiMzA4NDMyZTAtNjgzOS00ZGU0LWJkZDEtOWVhMzc2ZWUyZDJhIiwic2NvcGUiOiJTRVJWRVJfQUNDRVNTIiwic2FuZGJveF9hY2NvdW50Ijp0cnVlLCJjb25uZWN0X3N0YXRlbWVudHMiOmZhbHNlLCJlbnJpY2giOiJkaXNhYmxlZCIsImVucmljaF9lbnRpdHkiOmZhbHNlLCJlbnJpY2hfbG9jYXRpb24iOmZhbHNlLCJlbnJpY2hfY2F0ZWdvcnkiOmZhbHNlLCJhZmZvcmRhYmlsaXR5Ijoic2FuZGJveCIsImluY29tZSI6InNhbmRib3giLCJleHBlbnNlcyI6InNhbmRib3giLCJleHAiOjE2ODc2OTgxOTQsImlhdCI6MTY4NzY5NDU5NCwidmVyc2lvbiI6IjMuMCIsImRlbmllZF9wZXJtaXNzaW9ucyI6W119.XvMSj0GyFUwVmglL-Q1Vn55cLr6h1ZVLVqgSKTeel8A'
  },
    data: {
      email: 'gavin@hooli.com',
      mobile: '',
      firstName: 'Gavin',
      lastName: 'Belson'
    }
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}




exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("login", {
    title: "Login",
  });
};

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("signup", {
    title: "Create Account",
  });
};

exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/profile");
        });
      });
    }
  );
};
