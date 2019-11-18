import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/home';


function Routes() {
  return (
     <Layout>
       <Switch>
        <Route exact component={Home} to="/"/>
       </Switch>
     </Layout>
    )
}

export default Routes;
