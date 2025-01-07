const express = require('express')
const Stripe = require('stripe')
const app = express()
const stripe = Stripe(
  'sk_test_51QcrgRH6CCgEqnDB4QA83mvoUL8kbUCL2m2qkDb3lamRNweUjfNf93KvFVScWGd0WHlSpF8bFrSTv9bqJTBnk4sj00sA6kWzq3'
) // Replace with your Stripe Secret Key

app.use(express.json())

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency, // e.g., 'usd'
    })

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
