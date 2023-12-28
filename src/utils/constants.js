import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: '"Elevating homes with curated designs, our mission is to inspire personalized living. We strive to bring beauty, comfort, and a touch of individuality to every space, making home truly special."',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: '"Empowering homes with timeless elegance and innovative designs, our vision is to be the foremost source for transformative home decor, creating lasting impressions and enriching lives through inspired living."',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `"Pioneering since 1950's, we've curated home decor stories. Our journey blends tradition and modernity, crafting a legacy of style, quality, and cherished homes for generations."`,
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
