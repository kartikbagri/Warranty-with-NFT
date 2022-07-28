import React from 'react'
import NFTCard from "./NFTCard";
import Row from 'react-bootstrap/Row';


const NftContainer = ({ nfts }) => {
    console.log(nfts)
    var nftcontainerData = ""
    console.log(nfts.length)
    if (nfts.length) {
        nftcontainerData = nfts.map((data, index) =>

            <NFTCard nft={data} key={index} />
        )
    }
    return (
        <Row xs={1} md={4} className="justify-content-sm-evenly">
            {nftcontainerData}
        </Row>
    )
}
export default NftContainer;