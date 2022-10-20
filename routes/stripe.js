const router = require("express").Router();
const stripe = require("stripe")("sk_test_51Ls7uDSDZh2UXl6gClHDFbVWqVaLFqwKdYp90wjiEbpWOkXfYVtntWhzTWPrjYe1HuB6gYQcNM4HN1jmjqfJPsgv00l5sob5yA");

router.post("/payment", (req, res) => {
    console.log(req.body)
    console.log("stripe.js")
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {

                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;