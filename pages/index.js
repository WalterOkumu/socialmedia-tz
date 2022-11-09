import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Media - Landing Page</title>
        <meta name="description" content="Social Media Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pb-10'>
        <div className='pt-8 md:h-screen px-10 bg-[#181818]'>
          <Header></Header>
          <Top></Top>
        </div>
        <Cards></Cards>
        <Form></Form>
        <Testemunhos></Testemunhos>
      </main>
    </div>
  )
}
