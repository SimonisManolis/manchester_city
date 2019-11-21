import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/home';
import SignIn from './Components/SignIn/signIn';
import Dashboard from './Components/Admin/dashboard';
import PrivateRoutes from './Components/AuthRoutes/privateRoutes';


function Routes(props) {
  return (
     <Layout>
       <Switch>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <Route exact component={Home} path="/"/>
        <Route exact component={SignIn} path="/sign_in"/>
        
       </Switch>
     </Layout>
    )
}

export default Routes;
