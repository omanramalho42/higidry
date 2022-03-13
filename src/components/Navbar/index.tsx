import React from 'react'
import {
  Container,
  List,
  Menu,
  Item,
  ItemLink,
  ItemText,
} from './styles'

const Navbar:React.FC = () => {
  return (
    <Container>
      <Menu>
        <List>
          {['home', 'Sobre', 'servicos', 'Contato'].map(( item ) => (
            item && (
            <Item>
              {/* <NextLink href={`/${item}`}> */}
                <ItemLink href={`#${item}`}>
                  <ItemText>
                      { item }
                  </ItemText>
                </ItemLink>
              {/* </NextLink> */}
            </Item>
            )
          ))}
        </List>
      </Menu>
    </Container>
  )
}

export default Navbar