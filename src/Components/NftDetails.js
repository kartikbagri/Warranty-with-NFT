import React from 'react'
import Header from './Header';
const NftDetails = (props) => {
    console.log("In NftDetails");
    console.log(props.nft);
    return (
        <div className='main'>
            <Header />
            <div className='row'>
                
            </div>
            {props.nft}
        </div>
    );
}

export default NftDetails;