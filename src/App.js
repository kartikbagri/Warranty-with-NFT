import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import {ethers} from "ethers"
import Home from "./Components/Home";
import Profile from "./Components/Profile";
// import {Routes as Routes} from "react-router-dom";





function App() {
  // const [account,setAccount] = useState("");

  // const { address, isConnecting, isDisconnected } = useAccount()
  // let {isConnected} = useAccount()
  // console.log(useAccount)

  // const balance = useBalance({
  //   addressOrName: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  // })
  // console.log(balance)
  // console.log(useAccount.length);
  console.log('Helloo');

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;





