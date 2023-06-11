const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.PASSWORD === process.env.PASSWORD) {
    const token = jwt.sign(
      {
        userId: 1,
      },
      process.env.SECRET
    );
    res.json({
      token,
    });
  } else {
    res.send(401).send("wrong password");
  }
});

module.exports = router;
