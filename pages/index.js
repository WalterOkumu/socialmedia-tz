import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import About from '../components/About'
import Footer from '../components/Footer'
import Script from 'next/script'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
        <div className="pt-4 md:h-screen px-10 bg-no-repeat bg-cover bg-center bg-[url('/background-hero-mobile.png')] xl:bg-[url('/background-hero.png')]">
         <Header />
         <Top />
        </div>
        <About />
        <Cards />
        <ContactForm />
        <Footer />
        {/*<Testemunhos></Testemunhos>*/}
        {/*<Lead />*/}
        {/*<Testimonials />*/}

    </div>
  )
}
