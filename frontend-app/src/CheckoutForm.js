import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';

const fromUsdToCent = amount => amount * 100;

const successPayment = response => {
    alert('Your payment has been successfully completed!\n\nAmount: $' + (response.data.success.amount / 100) + '\nTransaction Id: ' + response.data.success.balance_transaction);
};

const errorPayment = data => {
    alert('Payment Error');
};

const onToken = (amount, description) => token =>
    axios.post(PAYMENT_SERVER_URL,
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromUsdToCent(amount)
        })
        .then(successPayment)
        .catch(errorPayment);

const CheckoutForm = ({ name, description, amount }) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={fromUsdToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
    />

export default CheckoutForm;
