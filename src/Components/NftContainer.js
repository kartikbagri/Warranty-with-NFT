import React from 'react'
import NFTCard from "./NFTCard";
import Row from 'react-bootstrap/Row';


const NftContainer = (props) => {
    var nftcontainerData = "";
    if (props.nfts.length) {
        nftcontainerData = props.nfts.map((data, index) =>
            <NFTCard nft={data} key={index} onClick={props.onCardClick} />
        )
    }
    return (
        <Row xs={2} md={3} className="justify-content-sm-evenly">
            {nftcontainerData}
        </Row>
    )
}
export default NftContainer;