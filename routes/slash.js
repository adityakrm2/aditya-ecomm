const router = require("express").Router();
router.get("/api/test", () => {
    console.log("test is successfull!!")
})
module.exports = router;