module.exports = {
  getIndex: (req, res) => {
    // Instead of rendering a view, you can send a JSON response or handle the route differently
    res.json({ message: "Welcome to the index page" });
  },
  getProfile: async (req, res) => { 
    console.log(req.user);
    try {
      // Instead of rendering a view, you can send a JSON response or handle the route differently
      res.json({ user: req.user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    }
  },
};
