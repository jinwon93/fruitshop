
import {React ,  Component } from "react";
import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";
import Web3 from "web3";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopInstance: null, // shopInstance 추가
      myAccount: null,    // myAccount 추가
      myApples: 0,        // myApples 추가
      web3: null
    };
  }

 

  buyApple() {
    this.state.shopInstance.buyApple({
      from: this.state.myAccount,
      value: this.state.web3.toWei(10, "ether"),
      gas: 900000
    });
  }

  sellApple() {
    this.state.shopInstance.sellMyApple(this.state.web3.toWei(10, "ether"), {
      from: this.state.myAccount,
      gas: 900000
    });
  }

  updateMyApples() {
    this.state.shopInstance.getMyApples().then(result => {
      this.setState({ myApples: result.toNumber() });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>사과의 가격: 10 ETH</h1>
        <button onClick={() => this.buyApple()}>구매하기</button>
        <p>내가 가진 사과: {this.state.myApples}</p>
        <button onClick={() => this.sellApple()}>
          판매하기 (판매 가격: {10 * this.state.myApples})
        </button>
      </div>
    );
  }
}


export default App;
