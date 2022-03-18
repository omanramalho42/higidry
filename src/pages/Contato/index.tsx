import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import {
  Container,
  Image,
  Title,
  ButtonContainer,
  Button,
  ImageContainer
} from '../../styles/screen/contato'
import { Layout } from '../../components'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contato: NextPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState('Olá higidry gostaria de fazer um orçamento');

  return (
    <Layout title='Contato'>
      <Container>
        <Title>Entre em contato</Title>

        {/* <ImageContainer> */}
          <Image src='/images/folheto.jpeg' alt='folheto'/>
        {/* </ImageContainer> */}
        
        <ButtonContainer>
          <Button onClick={() => router.push(`whatsapp://send?text=${message}&phone=558586565655`)}>
            <IoLogoWhatsapp 
              size={24} 
              color="green" 
              style={{ 
                borderRadius: 30, 
                marginRight: 2 
              }}
            />
            WhatsApp
          </Button>
        </ButtonContainer>
      </Container>
    </Layout>
  )
}

export default Contato
