import React from 'react'
import { Navbar, Social } from '../../components'
import {
  Container,
  Content,
  Logo,
  Title,
  Image,
 } from './styles'

const Header:React.FC = () => {
  return (
    <Container>
      
      <Logo>
        {/* <Image src='/images/logo.jpeg'/> */}
        <Title>HIGIDRY</Title>
      </Logo>
     
      <Navbar />

      <Content>
          <Social />
      </Content>

    </Container>
  )
}

export default Header