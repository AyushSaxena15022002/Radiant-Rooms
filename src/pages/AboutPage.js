import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='Decor_IMG' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
            <p>
              Radiant Rooms is your gateway to exceptional home decor. Our
              curated collections, meticulously crafted for timeless elegance,
              offer a seamless blend of sophistication and modernity. Founded by
              passionate design enthusiasts, we aspire to inspire and elevate
              your living spaces. With a commitment to quality craftsmanship,
              our pieces not only enhance aesthetics but endure. Explore Radiant
              Rooms for a personalized journey in creating a home that radiates
              warmth, comfort, and distinctive style.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
