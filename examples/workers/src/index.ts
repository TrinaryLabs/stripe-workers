import { Stripe } from 'stripe-workers'

const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Buy cool new product</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
    <script src="https://js.stripe.com/v3/"></script>
  </head>
  <body>
    <section>
      <div class="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button type="button" id="checkout-button">Checkout</button>
    </section>
  </body>
  <script type="text/javascript">
    // Create an instance of the Stripe object with your publishable API key
    var stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    var checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", function () {
      fetch("/create-checkout-session", {
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          // If redirectToCheckout fails due to a browser or network
          // error, you should display the localized error message to your
          // customer using error.message.
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    });
  </script>
</html>
`

import { Router } from 'itty-router'

// now let's create a router (note the lack of "new")
const router = Router()

router.get(
  '*',
  () =>
    new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }),
)

router.post('/create-checkout-session', async (request) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Stubborn Attachments',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://example.com/success.html`,
      cancel_url: `https://example.com/cancel.html`,
    })

    return new Response(JSON.stringify({ id: session.id }))
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    })
  }
})

router.all('*', () => new Response('Not Found.', { status: 404 }))

addEventListener('fetch', (event) =>
  event.respondWith(router.handle(event.request)),
)
