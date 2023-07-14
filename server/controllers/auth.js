const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const axios = require("axios");

let Authorization; // Define Authorization variable
let userId; // Define userId variable

// CREATE AUTH TOKEN
exports.authToken = (req,res) => {
  const options = {
    method: 'POST',
    url: 'https://au-api.basiq.io/token',
    headers: {
      accept: 'application/json',
      scope: 'client',
      'basiq-version': '3.0',
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: process.env.API_KEY
    }
  };
  axios
    .request(options)
    .then(function (response) {
      Authorization = 'Bearer ' + response.data.access_token;
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// CREATE BASIQ USER
exports.createBasiqUser = (req, res) => {
  const { user } = req; // Assuming the user object is available in the request after authentication

  const options = {
    method: 'POST',
    url: 'https://au-api.basiq.io/users',
    headers: {
      accept: 'application/json',
      'basiq-version': '3.0',
      'content-type': 'application/json',
      Authorization: `${Authorization}`,
    },
    data: {
      email: user.email,
      mobile: user.phoneNumber,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      userId = response.data.id;
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// CREATE AUTH LINK
// const cors = require('cors');

// const corsOptions = {
//   origin: 'http://localhost:3001', // Replace with your front-end URL
//   optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// cors(corsOptions,
exports.createAuthLink =  (req, res) => {
  const options = {
    method: 'POST',
    url: `https://au-api.basiq.io/users/${userId}/auth_link`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `${Authorization}`,
    },
    data: {mobile: User.phoneNumber}
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      // res.redirect(response.data.links.public)
    })
    .catch(function (error) {
      console.error(error);
    });
};


// GET BASIQ USER
exports.getBasiqUser = (req,res) => {
  const options = {
    method: 'GET',
    url: `https://au-api.basiq.io/users/${userId}`,
    headers: {
      accept: 'application/json',
      authorization: `${Authorization}`
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

// GET USER ACCOUNTS
exports.getAccounts = (req,res) => {

  const options = {
    method: 'GET',
    url: `https://au-api.basiq.io/users/${userId}/accounts`,
    // params: {filter: 'account.id.eq(AU00002)'},
    headers: {
      'basiq-version': '3.0', 
      accept: 'application/json',
      authorization: `${Authorization}`
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

};


// GET TRANSACTIONS
exports.getTransactions = (req, res) => {
  const options = {
    method: 'GET',
    url: `https://au-api.basiq.io/users/${userId}/transactions`,
    params: {limit: '500'},
    headers: {
      accept: 'application/json',
      authorization: `${Authorization}`
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


// SIGNUP AND LOGIN 
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
  res.json({
    title: "Create Account"
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
    phoneNumber: req.body.phoneNumber,
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





// exports.getConsents = (req,res) => {
//   const options = {
//     method: 'GET',
//     url: `https://au-api.basiq.io/users/${userId}/consents`,
//     headers: {
//       accept: 'application/json',
//       authorization: `${Authorization}`,
//     }
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }




// // AUTH FLOW
// exports.authFlow = (req,res) => {
//   axios
//     .post("https://au-api.basiq.io/token", {
//       headers: {
//         accept: "application/json",
//         scope: "client",
//         "basiq-version": "3.0",
//         "content-type": "application/x-www-form-urlencoded",
//         Authorization: process.env.API_KEY,
//       },
//     })
//     .then((response) => {
//       const authToken = response.data.access_token;
//       // Create Basiq User
//       return axios.post("https://au-api.basiq.io/users", {
//         headers: {
//           accept: "application/json",
//           "basiq-version": "3.0",
//           "content-type": "application/json",
//           Authorization: `Bearer ${authToken}`,
//         },
//         data: {
//           email: User.email,
//           mobile: User.phoneNumber,
//           firstName: User.firstName,
//           lastName: User.lastName,
//         },
//       });
//     })
//     .then((response) => {
//       const userId = response.data.id;
//       // Create Auth Link
//       return axios.post(`https://au-api.basiq.io/users/${userId}/auth_link`, {
//         headers: {
//           accept: "application/json",
//           "content-type": "application/json",
//           Authorization: `Bearer ${authToken}`,
//         },
//         data: {
//           mobile: User.phoneNumber,
//         },
//       });
//     })
//     .request(options)
//     .then(function (response) {
//       res.redirect(response.data.links.public)
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
