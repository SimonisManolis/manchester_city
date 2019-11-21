import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoutes =({
    user,
    component: Comp, //allazw name gt to component einai desmeumeno apo React
    ...rest
})=>{
    return <Route {...rest} component={(props)=>(//props apo to Route ex route.history etc
        user ?
            <Comp {...props} user={user}/>
            :
            <Redirect to="/sign_in"/>
    )} />
        
    
}

export default PrivateRoutes;