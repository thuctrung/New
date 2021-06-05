import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Ser from './Component/Header/service';
import Footer from './Component/Footer/Footer';
import Test from './Component/Content/test';
import Searching from './Component/Content/Searching'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Trending from './Component/Content/Trending';
// import Registration from '../Content/Registration'
// import Searching from '../Content/Searching'
import Detail from './Component/Content/Detail'
import Login from './Component/Content/Login'
// import Test from './Component/Content/test'
import ItemCard from './Component/Content/Card_Item'
import Registration from './Component/Content/Registration';
// import ItemCard from './Component/Content/Card_Item';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Header></Header>
      {/* <Test/> */}
      <Switch>
                <Route exact path="/"exact component={Test} >

                </Route>
                <Route  path="/searching" component={Searching}>
                  
                </Route>
                <Route path="/detail/:id" component={Detail} >
                    
                </Route> 
                <Route path="/trending" component={Trending} >
                  
                </Route>
                <Route path="/registration" component={Registration} >
                 
                </Route>
                <Route path="/login" component={Login} >
                  
                </Route>
                <Route path="/order" component={ItemCard} >
                  
                </Route> 
              </Switch>
              </Router>
      <Ser/>
      <Footer></Footer>
    </React.Fragment>
    
  );
}

export default App;
