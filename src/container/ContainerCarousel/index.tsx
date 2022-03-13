import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Container, ContainerImage, Image } from './styles';

const ContainerCarousel:React.FC = () => {
  return (
    <Container>
        <ContainerImage>
          <Image src='/images/logo.jpeg' alt='logo'/>
        </ContainerImage>
    </Container>
  )
}

export default ContainerCarousel