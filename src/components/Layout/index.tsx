import React from 'react'

import Head from 'next/head'

import { Container } from './styles'

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout = ({ 
    children, 
    title 
}: LayoutProps) => {

  return (
      <>
        <Head>
            <title>{`HIGIDRY | ${title}`}</title>
            <meta charSet='UTF-8' />
        </Head>
        <Container>
            { children }
        </Container>
      </>
  )
}

export default Layout
