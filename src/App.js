import React, {useState} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import MyNfts from "./Components/MyNfts";
import NftDetails from './Components/NftDetails';
import Header from "./Components/Header";

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

function App() {
  const [nftId, setNftId] = useState('');

  const nftCardHandler = (id) => {
    setNftId(id);
  }
  {console.log(nftId)}
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
          <Router>
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/mynfts">
                <MyNfts onCardClick ={nftCardHandler} />
              </Route>
              <Route exact path='/nftDetails'>
                <NftDetails nft={ nftId } />
              </Route>
            </Switch>
          </Router>

      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;






