import React from 'react'
import {
  Container,
  Grid,
  Panel,
  Card,
  Image,
  Title 
} from './styles';

interface BannerProps {
  banner: {
    key: number;
    imgurl: string;
  }[]
}

const Gallery = ({ banner }: BannerProps) => {
  return (
    <Container>
        <Title>Alguns de nossos trabalhos</Title>
        <Grid grid={banner.length}>
          {banner.map(({ key, imgurl }, index) => imgurl && (
            <Panel key={`${key}${index}`}>
                <Card>
                  <Image
                    src={ imgurl } 
                    alt="banner"
                  />
                </Card>
            </Panel>
          ))}
        </Grid>
    </Container>
  )
}

export default Gallery