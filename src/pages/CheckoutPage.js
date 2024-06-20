import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageHero } from '../components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import jsPDF from 'jspdf'
import { FaCheckCircle } from 'react-icons/fa'

const CheckoutPage = () => {
  const { total_amount, shipping_fee, cart, clearCart } = useCartContext()
  useEffect(() => {
    clearCart()
  })
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page-100'>
        <section>
          {/* <h1>Welcome to the Checkout Page !</h1> */}
          <h1>Your payment has been procesessed !</h1>
          <h3>
            <FaCheckCircle />
          </h3>
          <Link to='/' className='btn'>
            Explore More Products !
          </Link>
        </section>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default CheckoutPage
