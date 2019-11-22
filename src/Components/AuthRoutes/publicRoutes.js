import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PublicRoutes =({
    user,
    component: Comp, //allazw name gt to component einai desmeumeno apo React
    ...rest
})=>{
    return <Route {...rest} component={(props)=>(//props apo to Route ex route.history etc
        rest.restricted ?
         (
             user ? 
                <Redirect to="/dashboard"/>
                :
                <Comp {...props} user={user}/>
         )
         :
         <Comp {...props} user={user}/>
    )} />
        
    
}

export default PublicRoutes;