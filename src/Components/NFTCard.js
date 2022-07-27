import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NFTCard = ({nft,index}) => {  
    return (  
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nft.image_preview_url} />
      <Card.Body>
        <Card.Title>{nft.name}</Card.Title>
        <Card.Text>
          {nft.description}
        </Card.Text>
        <Button variant="primary">Link</Button>
      </Card.Body>
    </Card>
    );  
  }  

export default NFTCard;