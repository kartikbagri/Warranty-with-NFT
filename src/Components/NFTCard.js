import React from "react";

const NFTCard = ({nft,index}) => {  
    console.log("ok")
    return (  <div>
      <img src={nft.image_preview_url} width="100" height="100"></img>
      <p>{nft.name}</p>
      <p>{nft.description}</p>
      <p>{nft.traits[0].trait_type} : {nft.traits[0].value}</p>
      <p><a target="_blank" href={nft.permalink}>Link </a></p>
      </div>
    );  
  }  

export default NFTCard;