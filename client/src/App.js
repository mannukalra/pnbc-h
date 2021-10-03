
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';
import LogoAct from './logo-actual.svg';
import Bottom from './components/Bottom.js'
import Connect from './components/Connect.js'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      connectHidden: true,
      display: 'none'
    }
    this.myDivToFocus = React.createRef();
  }


  showConnect = () => {
    this.setState({ connectHidden: false, display: 'inline-block' });
    setTimeout(function () {
      document.getElementById("divToFocus").scrollIntoView({ block: 'end', behavior: 'smooth' });
    }, 300);
  }

  hideConnect = () => {
    this.setState({ connectHidden: true, display: 'none' });
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${bg1})` }}>
        <header className="App-header">
          <div style={{ color: "#61DAFB" }}>
            <b>CALL (+91) 773-634-9078</b>
          </div>
        </header>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <div style={{}}>
            <Tabs style={{  }}>
              <div style={{ display: "flex"}}>
                <img src={LogoAct} alt="logo" style={{ marginLeft: "2%", maxHeight: "54px", maxWidth: "84px" }}/>
                <TabList className="tab-grid">
                  <Tab style={{  }}>HOME</Tab>
                  <Tab style={{  }}>ABOUT US</Tab>
                  <Tab style={{  }}>SERVICES</Tab>
                  <Tab style={{  }}>Locations</Tab>
                </TabList>
              </div>
              
              <TabPanel>
                <div style={{ backgroundImage: `url(${bg2})`, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}}>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p className="font-large">
                    <b>Light & Effective way to control pest!</b>
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div style={{ backgroundImage: `url(${bg3})`, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)", marginTop: "32px"}}>
                  <p className="font-medium">
                    <b>Our quality oriented team is a group of dedicated professionals, 
                      <br/>
                      which guarantees our services meet high-quality standards.</b>
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div style={{ backgroundImage: `url(${bg3})`, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)", marginTop: "32px"}}>
                  <p className="font-medium">
                    <b>We help eradicate various kinds of pest and bugs, 
                      <br/>
                      below are a list of few:</b>
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div style={{ backgroundImage: `url(${bg3})`, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)", marginTop: "32px"}}>
                  <p className="font-medium">
                    <b>Chandigarh sector 20..., 
                      <br/>
                      Yamunanagar sector 10....</b>
                  </p>
                </div>
              </TabPanel>
          
              <div style={{marginBottom:"3rem"}}>
                <button className="mail-link" hidden={!this.state.connectHidden}
                    onClick={this.showConnect}>
                    Contact us
                </button>
              </div>
              <span>---</span>
              <br/>
              <div id="divToFocus" style={{ display: this.state.display, width:"54%", minWidth: "350px"}}>
                <Connect hideConnect={this.hideConnect}/>
              </div>
              <Bottom />
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
