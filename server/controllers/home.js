module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getProfile: async (req, res) => { 
    console.log(req.user)
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything

      //Sending post data from mongodb and user data to ejs template
      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

};
