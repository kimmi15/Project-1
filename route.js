const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorControllers")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/AuthorController", AuthorController.  )
module.exports = router;