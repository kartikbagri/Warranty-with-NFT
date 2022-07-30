import React, {useState, useEffect} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import MyNfts from "./Components/MyNfts";
import NftDetails from './Components/NftDetails';


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
import Scratchcard from "./Components/Scratchcard";

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
  const [allNfts, setAllNfts] = useState([]);

  useEffect(() => {
    const options = { method: 'GET', headers: { Accept: "application/json" } };
    fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0xD69bcfb20C58C59bB1F0E86a44104BaE1d86cA03&order_direction=desc&offset=0&limit=20&include_orders=false', options)
        .then(response => response.json())
        .then(response => {
            setAllNfts(response.assets);
        })
            .catch(err => console.error(err));
    }, []);

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
                <Profile nfts={ allNfts }/>
              </Route>
              <Route exact path="/mynfts">
                <MyNfts onCardClick ={nftCardHandler} />
              </Route>
              <Route exact path='/nftDetails'>
                <NftDetails nft={ nftId } />
              </Route>
              <Route exact path='/scratchcard'>
                <Scratchcard />
              </Route>
            </Switch>
          </Router>

      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;






