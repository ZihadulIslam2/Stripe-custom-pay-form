import  { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [paymentStatus, setPaymentStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const card = elements.getElement(CardElement)

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      'pi_3QcsiPH6CCgEqnDB0EZnbhv8_secret_YOtasmf6eJC5d9btn4kriq2bs',
      {
        payment_method: {
          card,
        },
      }
    )

    if (error) {
      setPaymentStatus(error.message)
    } else {
      setPaymentStatus('Payment Successful!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <p>{paymentStatus}</p>
    </form>
  )
}

export default CheckoutForm
