exports.getIndex = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("Home", {
    title: "Home",
  });
};

exports.getProfile = (req, res) => {
  res.render("Profile", {
    title: "Profile",
    user: req.user // Assuming you need to pass the user data to the profile template
  });
};
