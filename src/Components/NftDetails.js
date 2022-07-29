import React from 'react'
const NftDetails = (props) => {
    console.log("In NftDetails");
    console.log(props.nft);
    return (
        <div>
            {props.nft}
        </div>
    );
}

export default NftDetails;