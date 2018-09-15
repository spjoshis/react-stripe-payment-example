const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
    console.log(stripeErr)
    console.log(stripeRes)

    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        // perform the DB operations here
        res.status(200).send({ success: stripeRes });
    }
}

const paymentApi = app => {
    app.get('/', (req, res) => {
        res.send({ message: 'Stripe checkout demo server!'})
    });

    app.post('/', (req, res) => {
        stripe.charges.create(req.body, postStripeCharge(res));
    });

    return app;
};

module.exports = paymentApi;
