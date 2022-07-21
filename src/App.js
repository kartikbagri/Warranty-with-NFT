import React from "react";
import { useState } from "react"
// import {ethers} from "ethers"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Subcribe from "./Components/Subcribe";
import TopNFT from "./Components/TopNFT";
import NftContainer from "./Components/NftContainer";

import '@rainbow-me/rainbowkit/styles.css';

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
// import { useAccount } from 'wagmi'


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.arbitrum,chain.rinkeby],
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


function App() {
  // const [account,setAccount] = useState("");
  const [data,setData] = useState([])
  // const { address, isConnecting, isDisconnected } = useAccount()
  // let {isConnected} = useAccount()
  // console.log(useAccount)

  // const balance = useBalance({
  //   addressOrName: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  // })
  // console.log(balance)
  // console.log(useAccount.length);
  const getData = () => {
    const options = {method: 'GET',headers: {Accept: "application/json"}};
  
    fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0xD69bcfb20C58C59bB1F0E86a44104BaE1d86cA03&order_direction=desc&offset=0&limit=20&include_orders=false', options)
    .then(response => response.json())
    .then(response => {setData(response.assets);
                       console.log(response.assets)})
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
          <NftContainer nfts = {data}/>
          {/* {data.map (nft => {
            return(<div>
              
            </div>);
          })} */}
        </div>
      </div>
    </>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;






    