import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Error from './Error'
import Navv from './Navv'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FirstDiv from './Firstdiv';
import Ourwork from './Ourwork';
// import Api from './Api'
// import Napi from './Napi';

const App  = () => {
  return(
    <>
    <div className="container-fluid p-0 m-0" style={{overflow: 'hidden'}}>
    <FirstDiv/>
    <Navv />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/ourwork' component={Ourwork} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/servies' component={About}/>
      <Route component={Error}/>
    </Switch>
    {/* <Api/>
    <Napi/> */}

    </div>
    </>
  )
}
export default App;
