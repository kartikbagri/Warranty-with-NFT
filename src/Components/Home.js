import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import Subcribe from "./Subcribe";
import TopNFT from "./TopNFT";

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

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider coolMode chains={chains}>
                <>
                    {/* <div><button onClick={getData}>Data</button></div> */}
                    <div className="main p-3">
                        <div class="mb-2 text-white">
                            <Header />
                            <Hero />
                            <TopNFT />
                            <Subcribe />
                            {/* {console.log(data)} */}
                            {/* <NftContainer nfts={data} /> */}
                        </div>
                    </div>
                </>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default Home;


