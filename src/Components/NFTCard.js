import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";

const NFTCard = (props) => {
  const history = useHistory();
  const { nft, index} = props;
  const onClickHandler = () => {
    // console.log("clicked");
    props.onClick(nft);
    history.push('/nftDetails');
  }
  return (
    <Col className="d-flex justify-content-sm-center">
      <Card style={{height : "23rem", width : "20rem", marginBottom : "50px"}}>
        <Card.Img variant="top" src={nft.image_url}   style={{height:"15rem", width : "15rem", margin : 'auto', paddingTop: "10px"}} />
        <Card.Body className="text-center">
          <Card.Title>{nft.name}</Card.Title>
          <Card.Text className="mb-2" style={{
            'text-overflow': 'ellipsis',
            overflow: 'hidden',
            'white-space': 'nowrap'
          }}>
            {nft.description}
          </Card.Text>
          <Button variant="primary" style={{backgroundColor : 'black', color : 'white'}} onClick = {onClickHandler}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default NFTCard;