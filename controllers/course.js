const Course = require("../model/Course");

// @desc      GET COURSES
// @route     GET api/course
// @access    Private
exports.getCourses = async (req, res, next) => {
  try {
    const course = await Course.find();

    return res.status(200).json({ success: true, data: course });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// @desc    CREATE COURSE
// @route   POST /api/course
// @access  Private
exports.updateWallet = async (req, res, next) => {
  const { course_name, course_unit, level, grade } = req.body;

  const coursefields = {};
  if (amount) coursefields.amount = amount;
  if (user) coursefields.user = user;

  try {
    let wallet = await WalletFunded.findOne({ user });

    if (type === "Investment") {
      coursefields.amount = wallet.amount + +amount;
      wallet = await WalletFunded.findOneAndUpdate(
        { user: user },
        { $set: coursefields },
        { new: true }
      );
      return res.status(200).json({ success: true, data: wallet });
    }

    if (type === "Debit" || type === "Credit") {
      walletfields.amount = wallet.amount - +amount;
      wallet = await WalletFunded.findOneAndUpdate(
        { user: user },
        { $set: walletfields },
        { new: true }
      );
      return res.status(200).json({ success: true, data: wallet });
    }

    wallet = await WalletFunded.create(walletfields);
    return res.status(201).json({ success: true, data: wallet });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
