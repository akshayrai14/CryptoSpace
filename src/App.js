import { Switch, Link, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import { Layout, Space, Typography } from 'antd';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import Homepage from './components/Homepage';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage/>
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies/>
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails/>
              </Route>
              <Route exact path='/news'>
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer' >
          <Typography level={5} style={{color:'white' ,textAlign :'center'}}>
            Cryptoverse <br/>
            All rights reserved
          </Typography>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}


export default App;
