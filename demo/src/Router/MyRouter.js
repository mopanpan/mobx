import React from 'react';

import { Switch, Route} from 'react-router-dom';



const MyRouter=props=>(
    <Switch>
        {props.children}
        {
            props.route.map(Item=>(
                <Route key={Item.path} path={Item.path}
                render={routeProps=>(<Item.component {...routeProps} route={Item.children}
                />
                )} 
                />
            ))
        }
    </Switch>
)
export default MyRouter;