import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar className={`${styles['navbar']} p-3 w-100`} variant="dark">
      <Container>
        <Navbar.Brand href="/">Warranty with NFT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link href="/mynfts">My NFTs</Nav.Link>
          <Nav.Link href="/scratchcard">My Scratch Cards</Nav.Link>
        </Nav>
      </Container>
      <div style={{width: "170px"}}>
      <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address" />
      </div>
    </Navbar>
  )
}

export default Header;
