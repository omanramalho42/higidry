import React from 'react'
import router from 'next/router'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { Container, Icon } from './styles'

const Social:React.FC = () => {
  return (
    <Container>
      <Icon 
        href='facebook' 
        onClick={() => router.push('https://www.instagram.com/higidry_/')}>
        <AiFillFacebook 
          size={24}
          color="#FFFFFF"
        />
      </Icon>
      <Icon href='instagram'>
        <AiFillInstagram 
          size={24}
          color="#FFFFFF"  
        />
      </Icon>
    </Container>
  )
}

export default Social