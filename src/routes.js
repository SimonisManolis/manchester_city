import React from 'react';
import Layout from './HOC/layout';
import {Switch} from 'react-router-dom';
import Home from './Components/Home/home';
import SignIn from './Components/SignIn/signIn';
import Dashboard from './Components/Admin/dashboard';
import PrivateRoutes from './Components/AuthRoutes/privateRoutes';
import PublicRoutes from './Components/AuthRoutes/publicRoutes';
import AdminMatches from './Components/Admin/Matches/adminMatches';

function Routes(props) {
  return (
     <Layout>
       <Switch>
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
        <PublicRoutes {...props} restricted={true} path="/sign_in" exact component={SignIn} />
      
        
       </Switch>
     </Layout>
    )
}

export default Routes;
