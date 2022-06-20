import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const About: NextPage = () => {
  return (
    <div className='bg-main-color min-h-screen'>
      <Head>
        <title>Cataco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='container mx-auto px-4'>
        <h1>About me</h1>
      </main>

      <Footer />
    </div>
  )
}

export default About
