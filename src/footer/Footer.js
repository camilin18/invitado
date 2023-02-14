import React from "react";
import Face from '../../src/imagenes/facebook.png';
import IG from '../../src/imagenes/Instagram-Icon.png';
import TW from '../../src/imagenes/twitter.jpg';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
    
      <Container>
        <Row>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
          </Column>
          <Column>
          <div></div>
          <img src={Face} alt="face" height="130px" width="120px"></img>
          </Column>
          <Column>
          <img src={IG} alt="face" height="130px" width="120px"></img>
          </Column>
          <Column>
          <img src={TW} alt="face" height="130px" width="120px"></img>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

