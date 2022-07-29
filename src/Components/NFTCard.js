import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const NFTCard = (props) => {
  const { nft, index} = props;
  const onClickHandler = () => {
    console.log("clicked");
    props.onClick(nft.id);
  }
  return (
    <Col>
      <Card style={{height : "23rem"}}>
        <Card.Img variant="top" src={nft.image_preview_url}   style={{height:"15rem", width : "15rem"}} />
        <Card.Body>
          <Card.Title>{nft.name}</Card.Title>
          <Card.Text>
            {nft.description}
          </Card.Text>
          <Button variant="primary" style={{backgroundColor : 'black', color : 'white'}} onClick = {onClickHandler}><a href='/nftDetail'>Link</a></Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default NFTCard;