import React from 'react'
import { Navbar, Hero, Footer, Products, Testimonial, ContactUs, AboutUs } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App