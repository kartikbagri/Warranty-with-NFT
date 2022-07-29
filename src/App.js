import React, {useState} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import MyNfts from "./Components/MyNfts";
import NftDetails from './Components/NftDetails';

function App() {
  const [nftId, setNftId] = useState('');

  const nftCardHandler = (id) => {
    console.log("In nftCardHandler");
    console.log(id);
    setNftId(id);
  }
  {console.log(nftId)}
  return (
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
        <Route exact path='/nftDetail'>
          <NftDetails nft={ nftId } />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;






