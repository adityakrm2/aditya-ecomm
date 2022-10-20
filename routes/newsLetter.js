const NewsLetter = require("../models/newsLetter");

const router = require("express").Router();
router.post("/subs", async (req, res) => {

    const newNewsLetter = new NewsLetter({
        email: req.body.email
    });

    try {
        const newNewsLetterSaved = await newNewsLetter.save();
        res.status(201).json(newNewsLetterSaved);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;