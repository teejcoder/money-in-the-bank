 module.exports = {
  getIndex: (req, res) => {
    res.json({ message: "Welcome to the index page" });
  },
  
  getProfile: async (req, res) => { 
    try {
      res.json({ user: req.user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    }
  },

  getUser: async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
  
      const user = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        phoneNumber: req.user.phoneNumber
      };
  
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    }
  },
  

  updateBasiqUserId: async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { phoneNumber, basiqUserId } = req.body;

      await User.findOneAndUpdate(
        { phoneNumber: phoneNumber },
        { basiqUserId: basiqUserId }
      );

      res.status(200).json({ message: "Basiq user ID updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    }
  }

};

