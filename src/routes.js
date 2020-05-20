import React from 'react';
import Layout from './HOC/layout';
import {Switch} from 'react-router-dom';
import Home from './Components/Home/home';
import SignIn from './Components/SignIn/signIn';
import Dashboard from './Components/Admin/dashboard';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';

import PrivateRoutes from './Components/AuthRoutes/privateRoutes';
import PublicRoutes from './Components/AuthRoutes/publicRoutes';
import AdminMatches from './Components/Admin/Matches/adminMatches';
import AddEditMatch from './Components/Admin/Matches/addEditMatch';
import AdminPlayers from './Components/Admin/Players/adminPlayers';
import AddEditPlayers from './Components/Admin/Players/addEditPlayers';
import TheTeam from './Components/TheTeam/theTeam';


function Routes(props) {
  return (
     <Layout>
       <Switch>
        <PrivateRoutes {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers} />
        <PrivateRoutes {...props} path="/admin_players/add_player" exact component={AddEditPlayers} />
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
        <PublicRoutes {...props} restricted={false} path="/the_matches" exact component={TheMatches} />
        <PublicRoutes {...props} restricted={false} path="/the_team" exact component={TheTeam} />
        <PublicRoutes {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        <PublicRoutes {...props} restricted={false} path="/"  component={NotFound} />
        
       </Switch>
     </Layout>
    )
}

export default Routes;
