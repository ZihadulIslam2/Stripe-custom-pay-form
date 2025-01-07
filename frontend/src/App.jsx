import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(
  'pk_test_51QcrgRH6CCgEqnDBXaILaREBS0fRxtWA8edAwRT8SXdwqSEweG8sqUf807vHvcbIQqgioT2Da6zIQiupkvLd83Bs00R0ZmdPaA'
) // Replace with your Stripe Publishable Key

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default App
