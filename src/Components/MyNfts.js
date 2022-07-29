import React, { useState, useEffect} from 'react'
import NftContainer from './NftContainer';
import Header from './Header';
const MyNfts = (props) => {
    const [data, setData] = useState([])
    const options = { method: 'GET', headers: { Accept: "application/json" } };

    useEffect(() => {

        fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0xD69bcfb20C58C59bB1F0E86a44104BaE1d86cA03&order_direction=desc&offset=0&limit=20&include_orders=false', options)
            .then(response => response.json())
            .then(response => {
                setData(response.assets);
                console.log(response.assets)
            })
                .catch(err => console.error(err));
        }, [])

    return (
        <>
            <Header />
            <div className='main pt-5' style={{ minHeight: "100vh" }}>
                <div className='text-black'>
                    <NftContainer onCardClick={props.onCardClick} nfts={data} />
                </div>
            </div>
        </>
    );
}

export default MyNfts;