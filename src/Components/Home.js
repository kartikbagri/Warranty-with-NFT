import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import Subcribe from "./Subcribe";
import TopNFT from "./TopNFT";
import NftContainer from "./NftContainer";
import { useState } from "react"

import '@rainbow-me/rainbowkit/dist/index.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.rinkeby],
    [
        alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


const Home = () => {
    console.log('hi');
    const [data, setData] = useState([])
    const getData = () => {
        const options = { method: 'GET', headers: { Accept: "application/json" } };

        fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0xD69bcfb20C58C59bB1F0E86a44104BaE1d86cA03&order_direction=desc&offset=0&limit=20&include_orders=false', options)
            .then(response => response.json())
            .then(response => {
                setData(response.assets);
                console.log(response.assets)
            })
            .catch(err => console.error(err));
    }

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider coolMode chains={chains}>
                <>
                    <div><button onClick={getData}>Data</button></div>
                    <div className="main">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <Header />
                            <Hero />
                            <TopNFT />
                            <Subcribe />
                            {console.log(data)}
                            <NftContainer nfts={data} />
                        </div>
                    </div>
                </>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default Home;


