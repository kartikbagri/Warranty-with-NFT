import React from 'react'
import NFTCard from "./NFTCard";


const NftContainer = ({nfts}) => {
    console.log(nfts)
    var nftcontainerData = ""
    console.log(nfts.length)
    if(nfts.length){
        nftcontainerData = nfts.map((data,index) => 
                
            <NFTCard nft={data} key={index}/>
        )
    }
    return (
        <div className='nft-container' style={{ display: 'flex' }}>
            {nftcontainerData}
        </div>
    )
}
export default NftContainer;