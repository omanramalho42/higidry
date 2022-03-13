import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

// CONTAINERS
import { 
  Header,
  Footer,
  ContainerCarousel,
  Gallery
} from '../container'
// PAGES
import Contato from './Contato'
import Sobre from './Sobre'
import { Layout } from '../components'
// INTERFACES
interface BannerProps {
  key: number;
  imgurl: string;
}

const Home: NextPage = () => {
  // ESTADO
  const [ banner, setBanner ] = useState<BannerProps[]>([
    {
      key: 0,
      imgurl: '/images/banner.jpeg'
    },
    {
      key: 1,
      imgurl: '/images/banner1.jpeg'
    },
    {
      key: 2,
      imgurl: '/images/banner2.jpeg'
    },
    {
      key: 3,
      imgurl: '/images/banner3.jpeg'
    },
    {
      key: 4,
      imgurl: '/images/banner4.jpeg'
    },
    {
      key: 5,
      imgurl: '/images/banner5.jpeg'
    },
  ]);
  
  return (
    <div>

      <Head>
        <title>HIGIDRY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.jpeg" />
      </Head>

      <Layout title='Home'>
          <Header />
          <ContainerCarousel />
          <Gallery banner={banner} />
          <Contato />
          <Sobre />
          <Footer />
      </Layout>
      
    </div>
  )
}

export default Home
