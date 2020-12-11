//@route      Get api/auth
//@desc       Get logged in user
//@access     private
exports.getUser = (req, res, next) => {
  res.send("Get Juliana");
};

//@route      Post api/auth
//@desc       Authenticate user and get token
//@access     public
exports.postUser = (req, res, next) => {
  res.send("Post Juliana");
};
