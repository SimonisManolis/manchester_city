import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/home';
import SignIn from './Components/SignIn/signIn';


function Routes() {
  return (
     <Layout>
       <Switch>
        
        <Route exact component={Home} path="/"/>
        <Route exact component={SignIn} path="/sign_in"/>
       </Switch>
     </Layout>
    )
}

export default Routes;
