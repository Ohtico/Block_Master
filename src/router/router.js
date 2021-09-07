import React from "react";
import {
        BrowserRouter as Router,
        Switch,
        Route,
                                    } from "react-router-dom";                                 
import MasValoradas from '../components/MasValoradas'  
const Routes = () => {
    <Router> 
        
          <Switch>
                <Route
                path='/masvalodaras'
                components={
                    
                    MasValoradas

                }

                />
          </Switch>
    </Router>
}                                    

export default Routes