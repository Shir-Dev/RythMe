module.exports = {
  signIn: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.cookie("access_token", token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  }
};
