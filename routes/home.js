const express = require("express");
const { AuthorizeUser } = require("../controllers/login");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const auth_token = await req.headers.authorization;
    const loginCredentials = AuthorizeUser(auth_token);
    if (loginCredentials === false) {
      res.status(200).send("Invalid token");
    } else {
      res.json(loginCredentials);
    }
  } catch (e) {
    console.log(e);
    res.status(400).send("Server busy");
  }
});

module.exports = router;
